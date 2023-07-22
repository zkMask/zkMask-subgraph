import {
  AuthenticationCompleted as AuthenticationCompletedEvent,
  InitiateAuthentication as InitiateAuthenticationEvent
} from "../generated/ZkMask/ZkMask"
import {
  Address,
  BigInt,
  Bytes,
  dataSource,
  log,
} from "@graphprotocol/graph-ts";
import {
  AuthenticationCompleted,
  InitiateAuthentication
} from "../generated/schema"

export function handleAuthenticationCompleted(
  event: AuthenticationCompletedEvent
): void {
  let entity = new AuthenticationCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.success = event.params.success
  entity.user = event.params.userAddress
  entity.contract = event.params.contractAddress
  entity.txId = (event.params.transactionId)
  entity.value = event.params.value
  entity.methodId = event.params.methodId
  entity.txBlockNumber = event.block.number
  entity.txTimestamp = event.params.transactionTimestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitiateAuthentication(
  event: InitiateAuthenticationEvent
): void {
  let entity = new InitiateAuthentication(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.userAddress
  entity.txId = event.params.txId
  entity.methodId = event.params.methodId
  entity.txBlockNumber = event.block.number
  entity.txTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
