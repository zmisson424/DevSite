import { useState } from "react";
import { GRAPH_CONNECTIONS, GRAPH_NODES } from "../../data/hero";
import { useAnimationClock } from "../../hooks/useAnimationClock";
import { useElementSize } from "../../hooks/useElementSize";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import {
  areNodesConnected,
  calculateCaptionPosition,
  calculateNodePositions,
} from "./connectionGraphLayout";
import "./ConnectionGraph.css";

const FALLBACK_GRAPH_SIZE = { width: 760, height: 620 };
const RESTING_POINTER_POSITION = { x: 0.62, y: 0.4 };

/**
 * The hero's constellation of drifting labels joined by lines.
 * Hovering, focusing or tapping a node lights up its connections and shows a caption.
 */
function ConnectionGraph() {
  const { elementRef, size: graphSize } = useElementSize(FALLBACK_GRAPH_SIZE);
  const prefersReducedMotion = usePrefersReducedMotion();
  const elapsedSeconds = useAnimationClock({ isPaused: prefersReducedMotion });

  const [pointerPosition, setPointerPosition] = useState(RESTING_POINTER_POSITION);
  const [activeNodeId, setActiveNodeId] = useState(null);

  const nodePositions = calculateNodePositions(
    GRAPH_NODES,
    graphSize,
    elapsedSeconds,
    pointerPosition,
  );
  const activeNode = GRAPH_NODES.find((node) => node.id === activeNodeId);

  const handlePointerMove = (event) => {
    const bounds = elementRef.current.getBoundingClientRect();
    setPointerPosition({
      x: (event.clientX - bounds.left) / bounds.width,
      y: (event.clientY - bounds.top) / bounds.height,
    });
  };

  return (
    <div
      ref={elementRef}
      className="connection-graph"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActiveNodeId(null)}
    >
      {/* Soft lime glow that follows the pointer */}
      <div
        className="connection-graph__glow"
        aria-hidden="true"
        style={{ left: `${pointerPosition.x * 100}%`, top: `${pointerPosition.y * 100}%` }}
      />

      <svg className="connection-graph__links" aria-hidden="true">
        {GRAPH_CONNECTIONS.map(([startId, endId]) => {
          const start = nodePositions[startId];
          const end = nodePositions[endId];
          const isLit = activeNodeId === startId || activeNodeId === endId;

          return (
            <line
              key={`${startId}-${endId}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              className={isLit ? "connection-graph__link is-lit" : "connection-graph__link"}
            />
          );
        })}
      </svg>

      {GRAPH_NODES.map((node) => {
        const position = nodePositions[node.id];
        const isActive = node.id === activeNodeId;
        const isDimmed =
          activeNodeId !== null &&
          !isActive &&
          !areNodesConnected(GRAPH_CONNECTIONS, activeNodeId, node.id);

        const classNames = [
          "connection-graph__node",
          node.isMajor ? "connection-graph__node--major" : "connection-graph__node--minor",
          // Every major label is italic except the short "H1".
          node.isMajor && node.id !== "h1" ? "connection-graph__node--italic" : "",
          isActive ? "is-active" : "",
          isDimmed ? "is-dimmed" : "",
        ];

        return (
          <button
            key={node.id}
            type="button"
            className={classNames.join(" ").trim()}
            style={{ left: position.x, top: position.y }}
            aria-label={`${node.label}: ${node.caption}`}
            onPointerEnter={() => setActiveNodeId(node.id)}
            onFocus={() => setActiveNodeId(node.id)}
            onClick={() => setActiveNodeId(node.id)}
          >
            <span className="connection-graph__dot" aria-hidden="true" />
            <span className="connection-graph__label">{node.label}</span>
          </button>
        );
      })}

      {activeNode && (
        <div
          className="connection-graph__caption"
          style={calculateCaptionPosition(nodePositions[activeNode.id], graphSize)}
        >
          <p className="connection-graph__caption-kind">{activeNode.kind}</p>
          <p className="connection-graph__caption-text">{activeNode.caption}</p>
        </div>
      )}
    </div>
  );
}

export default ConnectionGraph;
