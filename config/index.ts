interface Env {
    INFURA_RINKEBY_KEY: string;
}

const ENV: Env = {
    INFURA_RINKEBY_KEY: process.env.INFURA_RINKEBY_KEY
} 

export default ENV