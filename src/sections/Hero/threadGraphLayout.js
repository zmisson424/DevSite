/*
 * Pure layout math for the hero's thread graph, kept apart from the component
 * so the rendering code stays readable.
 */

// Keep labels from sliding off the left or right edge.
const HORIZONTAL_EDGE_PADDING = 56;

// Caption card dimensions and spacing, in px.
const CAPTION_WIDTH = 250;
const CAPTION_ESTIMATED_HEIGHT = 120;
const CAPTION_GAP_BELOW_NODE = 34;
const CAPTION_GAP_ABOVE_NODE = 140;

/**
 * Where every node sits right now, keyed by node id.
 *
 * Each node starts at its home position, bobs gently over time,
 * and shifts against the pointer for a parallax effect.
 * pointerPosition is a fraction (0–1) of the graph's width and height.
 */
export function calculateNodePositions(nodes, graphSize, elapsedSeconds, pointerPosition) {
  const positionsById = {};

  nodes.forEach((node) => {
    const drift = elapsedSeconds * node.driftSpeed + node.driftPhase;
    const horizontalBob = Math.sin(drift) * node.driftAmount;
    const verticalBob = Math.cos(drift * 0.8) * node.driftAmount * 0.7;
    const horizontalParallax = (pointerPosition.x - 0.5) * node.parallaxDepth;
    const verticalParallax = (pointerPosition.y - 0.5) * node.parallaxDepth;

    const unclampedX = node.homeX * graphSize.width + horizontalBob - horizontalParallax;
    const x = Math.max(
      HORIZONTAL_EDGE_PADDING,
      Math.min(graphSize.width - HORIZONTAL_EDGE_PADDING, unclampedX),
    );
    const y = node.homeY * graphSize.height + verticalBob - verticalParallax;

    positionsById[node.id] = { x, y };
  });

  return positionsById;
}

/** True when the two nodes are joined by a thread. */
export function areNodesConnected(connections, firstNodeId, secondNodeId) {
  return connections.some(
    ([startId, endId]) =>
      (startId === firstNodeId && endId === secondNodeId) ||
      (startId === secondNodeId && endId === firstNodeId),
  );
}

/**
 * Top-left corner for the caption card of the active node.
 * Sits just below the node, or flips above it near the bottom edge.
 */
export function calculateCaptionPosition(nodePosition, graphSize) {
  const left = Math.max(8, Math.min(graphSize.width - CAPTION_WIDTH - 8, nodePosition.x - 40));
  const fitsBelow =
    nodePosition.y + CAPTION_GAP_BELOW_NODE + CAPTION_ESTIMATED_HEIGHT <= graphSize.height;
  const top = fitsBelow
    ? nodePosition.y + CAPTION_GAP_BELOW_NODE
    : nodePosition.y - CAPTION_GAP_ABOVE_NODE;

  return { left, top };
}
