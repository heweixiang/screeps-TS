/**
 * 方便记录当前状态以及下一步的目标
 */
interface CreepMemory {
  /**
   * 当前状态 1、采集 2、运输 3、建造 4、升级 5、维修 6、攻击 7、治疗 8、占领 9、拆除 10、移动 11、待命 12、集合
   */
  state: number;

  /**
   * 当前接收的任务id
   */
  taskId: string;

  /**
   * 目标id
   */
  targetId: string;

  /**
   * 目标位置
   */
  targetPos: RoomPosition;

  /**
   * 生成房间
   */
  spawnRoom: string;

  /**
   * 工作房间
   */
  workRoom: string;

}
