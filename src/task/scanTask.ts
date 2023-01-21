import attackTask from './scan/attackTask';
import buildTask from './scan/buildTask';
import claimTask from './scan/claimTask';
import dismantleTask from './scan/dismantleTask';
import harvestTask from "./scan/harvestTask";
import healTask from './scan/healTask';
import repairTask from './scan/repairTask';
import transportTask from './scan/transportTask';
import upgradeTask from './scan/upgradeTask';

/**
 * 针对房间内进行任务扫描发布功能
 *  1、运输任务 2、采集任务 3、建造任务 4、升级任务 5、维修任务 6、攻击任务 7、治疗任务 8、占领任务 9、拆除任务 10、移动任务
 */
const scanTask = {
  // 任务扫描发布
  run(room: Room): void {
    // 获取房间内存
    const roomMemory: RoomMemory = room.memory;
    // 1. 采集任务
    const harvestTaskList = harvestTask.run(room);
    // 2. 运输任务
    const transportTaskList = transportTask.run(room);
    // 3. 建造任务
    const buildTaskList = buildTask.run(room);
    // 4. 升级任务
    const upgradeTaskList = upgradeTask.run(room);
    // 5. 维修任务
    const repairTaskList = repairTask.run(room);
    // 6. 攻击任务
    const attackTaskList = attackTask.run(room);
    // 7. 治疗任务
    const healTaskList = healTask.run(room);
    // 8. 占领任务
    const claimTaskList = claimTask.run(room);
    // 9. 拆除任务
    const dismantleTaskList = dismantleTask.run(room);
    // 汇总任务List
    const taskList = harvestTaskList.concat(transportTaskList)
      .concat(buildTaskList)
      .concat(upgradeTaskList)
      .concat(repairTaskList)
      .concat(attackTaskList)
      .concat(healTaskList)
      .concat(claimTaskList)
      .concat(dismantleTaskList);
    // 将任务发布到房间
    roomMemory.tasks = taskList;
  }
}

export default scanTask
