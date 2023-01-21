/**
 * @description: 房间管理器, 用于房间内部的任务发布和creep调度
 */

import taskManager from "task/taskManager";

class RoomManager {
  loop(room: Room) {
    // 1. 任务扫描发布
    taskManager.run(room);
    // 2. creep调度
  }
}

export default RoomManager
