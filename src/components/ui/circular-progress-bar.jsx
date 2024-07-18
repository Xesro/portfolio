import {cn} from "@/lib/utils";
import {VStack} from "@/components/ui/v-stack";

export function  CircularProgressBar({ percentage, name, size = 60, strokeWidth = 8, className })  {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (

        <VStack>
            <div className="relative inline-flex items-center justify-center">
                <svg width={size} height={size} className="transform -rotate-90">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#333333"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#F66B15"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        fill="transparent"
                    />
                </svg>
                <div className="absolute text-white text-sm">{percentage}%</div>
            </div>
            <div className="mt-1 text-white">{name}</div>
        </VStack>
    );
};
