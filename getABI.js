const axios = require('axios')
const { ethers } = require('ethers')

const address = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6'
const apiKey = '3YYFH5XPPPZX5QTB4WB7H4G34HTMUW767A'
const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${apiKey}`
const infuraUrl = 'https://mainnet.infura.io/v3/4149340e93ff495bb94cb7e54558e0fc'

const getAbi = async () => {
  const res = await axios.get(url)
  const abi = JSON.parse(res.data.result)
  console.log(abi)
}
getAbi()