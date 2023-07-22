import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  AuthenticationCompleted,
  InitiateAuthentication
} from "../generated/ZkMask/ZkMask"

export function createAuthenticationCompletedEvent(
  success: boolean,
  user: Address
): AuthenticationCompleted {
  let authenticationCompletedEvent = changetype<AuthenticationCompleted>(
    newMockEvent()
  )

  authenticationCompletedEvent.parameters = new Array()

  authenticationCompletedEvent.parameters.push(
    new ethereum.EventParam("success", ethereum.Value.fromBoolean(success))
  )
  authenticationCompletedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return authenticationCompletedEvent
}

export function createInitiateAuthenticationEvent(
  user: Address
): InitiateAuthentication {
  let initiateAuthenticationEvent = changetype<InitiateAuthentication>(
    newMockEvent()
  )

  initiateAuthenticationEvent.parameters = new Array()

  initiateAuthenticationEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return initiateAuthenticationEvent
}
