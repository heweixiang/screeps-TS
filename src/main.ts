import { ErrorMapper } from "utils/ErrorMapper";

// 引入房间管理
import RoomManager from "room/RoomManager";
// 引入公共的字典配置
import dictionary from "config/dictionary";

declare global {
  /*
    示例类型，展开这些类型或删除它们并添加自己的类型。
    注意：此处定义的值和属性不完全*仅通过此类型定义而存在*。
        如果您想使用它们，还必须实现它们。（例如，在Creeps内存中实际设置“角色”属性）
    在此“全局”块中添加的类型位于环境全局上下文中。这是必需的，因为“main.ts”是一个模块文件（使用导入或导出）。
    将合并与@types/screeps中的名称匹配的接口。这就是如何从@types/screps扩展“内置”接口的方法。
  */
  // Memory extension samples
  interface Memory {
    uuid: number;
    log: any;
  }

  interface CreepMemory {
    role: string;
    room: string;
    working: boolean;
  }

  // Syntax for adding proprties to `global` (ex "global.log")
  namespace NodeJS {
    interface Global {
      log: any;
      dictionary: any; // 字典配置
    }
  }
}

// 将TS编译为JS并与汇总绑定时，错误消息中的行号和文件名会更改
// 此实用程序使用源映射来获取原始TS源代码的行号和文件名
export const loop = ErrorMapper.wrapLoop(() => {
  // 挂载全局字典变量
  global.dictionary = dictionary;
  console.log(`Current game ticsssk is ${Game.time}`);
  // 移除失效creep以防重复或者派发无效任务到无效creep
  removeDeadCreep();
  // 调用房间管理
  for (const roomName in Game.rooms) {
    const room = Game.rooms[roomName];
    const roomManager = new RoomManager();
    roomManager.loop(room);
  }
});

// 移除房间内的失效Creep
function removeDeadCreep() {
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }
}
