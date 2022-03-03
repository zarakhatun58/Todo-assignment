import React from 'react';
import  Box  from '@mui/material/Box';
import { PieChart } from 'recharts';
import { Pie } from 'recharts';
import { Label } from 'recharts';
import { Cell } from 'recharts';
import { Typography } from '@mui/material';



const HalpChart = () => {

    const data = [
        { name: "Group A", value: 100 },
        { name: "Group B", value: 300 },
      
      ];
      const COLORS = ["#F8F8F8", "#009999",];
    return (
        <>
            <Box>
                <PieChart width={130} height={130}>
                    <Pie
                        data={data}
                        cx={50}
                        cy={50}
                        innerRadius={20}
                        outerRadius={40}
                        fill="#8884d8"
                        dataKey="value"
                        textAnchor="middle"
                    >
                        <Label
                            value=""
                            position="center"
                            style={{ fontSize: "32px" }}
                        />
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>

            </Box>
            <Box style={{ marginRight: "20px", paddingTop: "16px" }}>
            <Typography style={{ color: "#1BAAB5", fontSize: "17px" }}> 1.5M/2M</Typography>
            <Typography style={{ color: "black", fontSize: "38px", fontWeight: "bold" }}> 75%</Typography>
            <Typography style={{color:"#606C74", fontSize:"12px", }}>You're nearly eligible for <br/> your next reward!</Typography>
          </Box>
        </>
    );
};

export default HalpChart;