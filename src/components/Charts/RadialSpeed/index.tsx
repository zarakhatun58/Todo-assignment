import React, { useEffect, useRef, useState } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';



interface RefObject<T> {
    readonly current: T | null;
}
const RadialSpeed = () => {

    const [value, setValue] = useState(100);
    const interval = useRef<ReturnType<typeof setInterval>>(null)
    const generateRandom = () => setValue(Math.floor(Math.random() * 201 + 1));
  

    // useEffect(() => {
    //     interval.current = setInterval(function () {
    //         generateRandom();
    //     }, 500);
    //     return () => clearInterval(interval.current);
    // }, []);

      const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
    const setIntervalConst: ReturnType<typeof setInterval> = setInterval(() => {
        console.log("type of setInterval");
    }, 1000)


    
    return (
        <>
            <div>
                <ReactSpeedometer
                    minValue={0}
                    maxValue={200}
                    // maxSegmentLabels={12}
                    needleHeightRatio={0.8}
                    ringWidth={25}
                    segments={5}
                    value={value}
                    segmentColors={[
                        "#b81414",
                        "#ec5555",
                        "#f2db5b",
                        "#7ab55c",
                        "#385828"
                    ]}
                    needleColor="#000080"
                />
            </div>

        </>
    );
};

export default RadialSpeed;