import {
  AuthenticationCompleted as AuthenticationCompletedEvent,
  InitiateAuthentication as InitiateAuthenticationEvent
} from "../generated/ZkMask/ZkMask"
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
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitiateAuthentication(
  event: InitiateAuthenticationEvent
): void {
  let entity = new InitiateAuthentication(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
