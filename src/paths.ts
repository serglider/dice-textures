export function createRectPath(origSize: number, radius: number, lineWidth: number): Path2D {
    const origin = lineWidth / 2;
    const size = origSize - origin;
    const path = new Path2D();
    path.moveTo(origin + radius, origin);
    path.arcTo(size, origin, size, size, radius);
    path.arcTo(size, size, origin + radius, size, radius);
    path.arcTo(origin, size, origin, origin, radius);
    path.arcTo(origin, origin, size, origin, radius);
    return path;
}

export function createCirclePath(x: number, y: number, radius: number, lineWidth: number): Path2D {
    const r = radius - lineWidth / 2;
    const path = new Path2D();
    path.arc(x, y, r, 0, 2 * Math.PI);
    return path;
}
