/**
 * 该文件用于管理任务，初始化生成房间任务
 */

import scanTask from "./scanTask";

const taskManagement = {
  // 这里调用扫描任务，同时会有任务输出
  run(room: Room): void {
    // 1. 任务扫描发布
    scanTask.run(room);
    // 2. 必要输出
    this.taskManagerLog(room);
  },
  // 关于任务输出
  taskManagerLog(room: Room) {
    console.log(`${room.name} this Task is run scan！`);
  }
}
export default taskManagement
