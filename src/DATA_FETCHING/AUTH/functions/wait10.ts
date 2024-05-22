

export async function wait10(secs:number){
    const wait = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Waited for 10 seconds!");
        }, secs); // 10000 milliseconds = 10 seconds
      });


    await wait;
}