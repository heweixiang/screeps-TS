/**
 * 每个房间内的内存存储对象，用于扫描标记房间并存储房间内的基本信息
 */
interface RoomMemory {
  /**
   * 该房间性质
   * 1、主房 2、外矿房 3、九房 4、不踏入房 5、其它玩家房 6、中立房 7、待扫描房  8、待占领房 9、暂时拉黑房
   */
  roomType: number;

  /**
   * 该房间所属玩家名称，如果是中立房则为null，如果是九房则标记为invader
   */
  owner: string;

  /**
   * 该房间所有矿物数量
   *  1、能量source 2、keanium 3、lemergium 4、zynthium 5、utrium 6、ghodium 7、hydrogen 8、oxygen 9、carbon 10、metal 11、silicon
   */
  resources: {
    [resourceType: string]: number;
  };

  /**
   * 房间拉黑时间，拉黑期间不用管这个房间的事情，一般拉黑前计算出此倒计时tick
   */
  blackTime: number;

  /**
   * 该房间的任务列表
   */
  tasks: Task[];

  /**
   * 该房间当前状态 1、安全 2、危险 3、紧急（没有矿工、运输工)
   */
  status: number;
}
