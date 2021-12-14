import React from 'react'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
const Charts = () => {
    const chartDataRaw = {
        labels: ['Đơn giao thành công', 'Đơn giao thất bại', 'Đơn bị hủy'],
        datasets: [{
            label: 'Biểu đồ',
            data: [
                617594,
                181045,
                94200
            ], backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
            ]
        }],

    }
    const defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
    }
    return (
        <div className="chart" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            alignContent: 'center'
        }}>
            <div style={{ width: '40vw', padding:'20px' }}>
                <Bar
                    data={chartDataRaw}
                    options={{
                        title: {
                            display: defaultProps.displayTitle,
                            text: 'Tỷ lệ giao đơn hàng thành công',
                            fontSize: 50
                        },
                        legend: {
                            display: defaultProps.displayLegend,
                            position: defaultProps.legendPosition
                        }
                    }}
                />
            </div>
            <div style={{ width: '40vw', padding:'20px' }}>
                <Line
                    data={chartDataRaw}
                    options={{
                        title: {
                            display: defaultProps.displayTitle,
                            text: 'Sản phẩm bán chạy nhất',
                            fontSize: 25
                        },
                        legend: {
                            display: defaultProps.displayLegend,
                            position: defaultProps.legendPosition
                        }
                    }}
                />
            </div>

            <div style={{ width: '20vw' }}>
                <Doughnut
                    data={chartDataRaw}
                    options={{
                        title: {
                            display: defaultProps.displayTitle,
                            text: 'Doanh thu theo tháng',
                            fontSize: 25
                        },
                        legend: {
                            display: defaultProps.displayLegend,
                            position: defaultProps.legendPosition
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Charts
