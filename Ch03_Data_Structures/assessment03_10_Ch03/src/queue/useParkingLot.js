const ParkingLot = require("./parkingLot");
const Queue = require("../queue/queue");

// const pl = new ParkingLot(10, 2);
// // console.log(pl.vacantSpaces);
// // console.log(pl.queue.isEmpty());
// // console.log(pl.occupants);
// pl.enter("123");
// pl.enter("456");
// pl.enter("789");
// // console.log(pl.queue.isEmpty());

// pl.spaces.forEach((e) => console.log(e));
// // console.log(pl.occupants);

// pl.leave("456");
// // pl.leave("123");
// // pl.enter("111");
// console.log(pl.occupants);
// console.log(pl.queue.isEmpty());

// // const pl2 = new ParkingLot(10, 11);
// // pl2.enter("NXL-1530");
// // pl2.leave("KHS-8928");
// // console.log(pl2.totalRevenue);

// // const q = new Queue();
// // console.log(q.isEmpty());

const pl3 = new ParkingLot(2, 11);
pl3.enter("NXL-1530");
pl3.enter("NXL-1531");

pl3.enter("NXL-1532");
pl3.enter("NXL-1533");
pl3.enter("NXL-1534");

let cur = pl3.queue.first;
while (cur) {
    console.log("NXL-1534 " + cur.value);
    cur = cur.next;
}

pl3.leave("NXL-1534");
cur = pl3.queue.first;
while (cur) {
    console.log("Found " + cur.value);
    cur = cur.next;
}