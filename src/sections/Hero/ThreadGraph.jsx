import { useState } from "react";
import { THREAD_CONNECTIONS, THREAD_NODES } from "../../data/hero";
import { useAnimationClock } from "../../hooks/useAnimationClock";
import { useElementSize } from "../../hooks/useElementSize";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import {
  areNodesConnected,
  calculateCaptionPosition,
  calculateNodePositions,
} from "./threadGraphLayout";
import "./ThreadGraph.css";

const FALLBACK_GRAPH_SIZE = { width: 760, height: 620 };
const RESTING_POINTER_POSITION = { x: 0.62, y: 0.4 };

/**
 * The hero's constellation of drifting labels joined by threads.
 * Hovering, focusing or tapping a node lights up its threads and shows a caption.
 */
function ThreadGraph() {
  const { elementRef, size: graphSize } = useElementSize(FALLBACK_GRAPH_SIZE);
  const prefersReducedMotion = usePrefersReducedMotion();
  const elapsedSeconds = useAnimationClock({ isPaused: prefersReducedMotion });

  const [pointerPosition, setPointerPosition] = useState(RESTING_POINTER_POSITION);
  const [activeNodeId, setActiveNodeId] = useState(null);

  const nodePositions = calculateNodePositions(
    THREAD_NODES,
    graphSize,
    elapsedSeconds,
    pointerPosition,
  );
  const activeNode = THREAD_NODES.find((node) => node.id === activeNodeId);

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
      className="thread-graph"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActiveNodeId(null)}
    >
      {/* Soft lime glow that follows the pointer */}
      <div
        className="thread-graph__glow"
        aria-hidden="true"
        style={{ left: `${pointerPosition.x * 100}%`, top: `${pointerPosition.y * 100}%` }}
      />

      <svg className="thread-graph__threads" aria-hidden="true">
        {THREAD_CONNECTIONS.map(([startId, endId]) => {
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
              className={isLit ? "thread-graph__thread is-lit" : "thread-graph__thread"}
            />
          );
        })}
      </svg>

      {THREAD_NODES.map((node) => {
        const position = nodePositions[node.id];
        const isActive = node.id === activeNodeId;
        const isDimmed =
          activeNodeId !== null &&
          !isActive &&
          !areNodesConnected(THREAD_CONNECTIONS, activeNodeId, node.id);

        const classNames = [
          "thread-graph__node",
          node.isMajor ? "thread-graph__node--major" : "thread-graph__node--minor",
          // Every major label is italic except the short "H1".
          node.isMajor && node.id !== "h1" ? "thread-graph__node--italic" : "",
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
            <span className="thread-graph__dot" aria-hidden="true" />
            <span className="thread-graph__label">{node.label}</span>
          </button>
        );
      })}

      {activeNode && (
        <div
          className="thread-graph__caption"
          style={calculateCaptionPosition(nodePositions[activeNode.id], graphSize)}
        >
          <p className="thread-graph__caption-kind">{activeNode.kind}</p>
          <p className="thread-graph__caption-text">{activeNode.caption}</p>
        </div>
      )}
    </div>
  );
}

export default ThreadGraph;
