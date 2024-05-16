

export async function wait10(){
    const wait = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Waited for 10 seconds!");
        }, 10000); // 10000 milliseconds = 10 seconds
      });


    await wait;
}