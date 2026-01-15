'use client';

export default function ScrollDepthZone() {
    return (
        <div
            className="w-full relative z-0 pointer-events-none"
            style={{ height: '150vh' }}
            aria-hidden="true"
        />
    );
}
