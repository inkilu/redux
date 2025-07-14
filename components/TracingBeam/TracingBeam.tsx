"use client";
import React from "react";
import { TracingBeam } from "../TracingBeam/ui/tracing-beam";

export function TracingBeamDemo({ children }: { children: React.ReactNode }) {
    return (
        <TracingBeam className="px-6">
            {children}
        </TracingBeam>
    );
}

