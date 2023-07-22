import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { AuthenticationCompleted } from "../generated/schema"
import { AuthenticationCompleted as AuthenticationCompletedEvent } from "../generated/ZkMask/ZkMask"
import { handleAuthenticationCompleted } from "../src/zk-mask"
import { createAuthenticationCompletedEvent } from "./zk-mask-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let success = "boolean Not implemented"
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let newAuthenticationCompletedEvent = createAuthenticationCompletedEvent(
      success,
      user
    )
    handleAuthenticationCompleted(newAuthenticationCompletedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AuthenticationCompleted created and stored", () => {
    assert.entityCount("AuthenticationCompleted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AuthenticationCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "success",
      "boolean Not implemented"
    )
    assert.fieldEquals(
      "AuthenticationCompleted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
