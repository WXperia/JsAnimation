'use strict'

class Animation {
    constructor() {

    }
    /**
     * 添加一个同步任务，预加载图片
     * @param imglist 图片数组
     */
    loadImage() {

    }
    /**
     * 添加一个异步定时任务，通过定时改变图片背景位置，实现帧动画
     * @param ele dom对象
     * @param positions 背景位置数组
     * @param imageUrl 图片地址
     */
    changePosition(ele, positions, imageUrl) {

    }
    /**
     * 添加一个异步定时任务，通过定时改变背景图片地址，实现帧动画
     * @param ele dom(Image对象)
     * @param imglist 图片地址数组
     */
    changeSrc() {

    }
    /**
     * 高级用法，添加一个异步定时执行的任务，
     * 该任务自定义动画每帧执行的任务函数
     * @param taskFn 每帧执行的任务函数
     */
    enterFrame() {

    }
    /**
     * 添加一个同步任务，可在上一个任务完成执行回调函数
     * @param callback 回调函数
     */
    then() {

    }
    /**
     * 开始执行任务
     * @param interval 异步定时任务执行的间隔
     */
    start() {

    }
    /**
     * 添加一个同步任务，该任务就是回退到上一个任务中，
     * 实现重复上一个任务的效果，可定义重复的次数。
     * @param times 重复次数
     */
    repeat() { }
    /**
     * 添加一个同步任务，该任务就是无线循环上一次任务
     */
    repeatForever() {

    }
    /**
     * 设置当前任务结束后下一个任务开始前的等待时间
     * @param time 等待的时长
     */
    wait() {

    }
    /**
     * 暂停当前执行的异步定时任务
     */
    pause() {

    }
    /**
     * 重新开始执行当前异步定时任务
     */
    restart() {

    }
    /**
     * 释放资源
     */
    dispose() {

    }

    /**
     * 添加一个任务到任务队列中
     * @param taskFn 任务方法
     * @param type 任务类型
     * @returns {Animation}
     * @private
     */
    _add() {

    }
    /**
     * 执行任务
     * @private
     */
    _runTask() {

    }
    /**
     * 同步任务
     * @param task 执行任务的函数
     * @private
     */
    _syncTask() {

    }
    /**
     * 异步任务
     * @param task 执行异步的函数
     * @private
     */
    _asyncTask() {

    }
    /**
     * 切换到下一个任务，如果当前任务需要等待，则延时执行
     * @param task 下一个任务
     * @private
     */
    _next() {

    }
}