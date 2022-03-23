import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const SpeedGauge = () => {
    const textColor = '#AAA'
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <ReactSpeedometer
                        needleHeightRatio={0.8}
                        ringWidth={30}
                        segments={3}
                        minValue={0}
                        maxValue={1200}
                         value={500}
                        segmentColors={['#FF9933', '#ECEFF4', '#138808']}
                        needleColor="#000080"
                        textColor={textColor}
                    />
                </div>
                <div>
                    <ReactSpeedometer
                        segments={3}
                        value={470}
                        segmentColors={['#0055A4', '#ECEFF4', '#EF4135']}
                        needleColor="lightgreen"
                        textColor={textColor}
                    />
                </div>
            </div>
        </>
    );
};

export default SpeedGauge;