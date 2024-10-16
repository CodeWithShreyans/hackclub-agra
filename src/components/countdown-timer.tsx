"use client";

import { CardContent } from "./ui/card";

import { useEffect } from "react";

import { useState } from "react";
import { Card } from "./ui/card";

export const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: {
            days: number;
            hours: number;
            minutes: number;
            seconds: number;
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZero = (value: number) => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <div
            className="grid grid-cols-4 gap-4 text-center"
            suppressHydrationWarning={true}
        >
            {Object.keys(timeLeft).length === 0 ? (
                <p>The event has started!</p>
            ) : (
                Object.entries(timeLeft).map(([unit, value]) => (
                    <Card key={unit} className="bg-secondary">
                        <CardContent className="p-4">
                            <div className="text-4xl font-bold text-secondary-foreground">
                                {addLeadingZero(value)}
                            </div>
                            <div className="text-sm capitalize text-muted-foreground">
                                {unit}
                            </div>
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
};
