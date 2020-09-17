import { axiosPost } from "@/libs/http"

function getDayData(data) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "api/calendar/day",
            data: { date: data },
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

function getMonthData(yearMonth) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "api/calendar/month",
            data: {
                "year-month": yearMonth
            },
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

function getYearData(year) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "api/calendar/year",
            data: { year },
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

export {
    getDayData,
    getMonthData,
    getYearData
}