import { ChainId } from '@mochiswap/bsdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.BSCTESTNET]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
