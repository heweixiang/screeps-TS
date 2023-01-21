/**
 * 扫描采集任务
 *  1、目前是扫描房间内的所有能量矿，然后发布采集任务
 */

const harvestTask = {
  run(room: Room): Array<Task> {
    console.log('%charvestTask.ts line:8 room', 'color: #007acc;', room);
    // 目前房间仅发布能源采集任务，后续可根据矿物类型发布不同的采集任务
    // 获取当前房间采集任务列表
    const taskList: Array<Task> = room.memory.tasks.filter((task: Task) => task.type === global.dictionary.TASK_TYPE.HARVEST);
    // 遍历任务列表
    for (const task of taskList) {
      // 如果接收任务的爬爬已经死亡，则修改任务状态为未接受
      if (!Game.creeps[task.creepName]) {
        task.status = global.dictionary.TASK_STATUS.UNACCEPTED;
      }
    }
    // 如果房间内存中没有采集任务，则发布采集任务，只用发布一次即可
    if (taskList.length === 0) {
      // 获取房间内所有能量矿
      const sources = room.find(FIND_SOURCES);
      // 遍历能量矿
      for (const source of sources) {
        const task: Task = {
          id: room.name + '_' + global.dictionary.TASK_TYPE.HARVEST + '_' + source.id,
          type: global.dictionary.TASK_TYPE.HARVEST,
          status: global.dictionary.TASK_STATUS.UNACCEPTED,
          creepName: '',
          targetAmount: -1,
          priority: 3,
        }
        taskList.push(task)
      }
    }
    console.log('taskList: ', taskList.length);
    return taskList
  }
}

export default harvestTask
