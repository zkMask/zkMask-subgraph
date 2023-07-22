// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AuthenticationCompleted extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AuthenticationCompleted entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AuthenticationCompleted must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AuthenticationCompleted", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): AuthenticationCompleted | null {
    return changetype<AuthenticationCompleted | null>(
      store.get_in_block("AuthenticationCompleted", id.toHexString())
    );
  }

  static load(id: Bytes): AuthenticationCompleted | null {
    return changetype<AuthenticationCompleted | null>(
      store.get("AuthenticationCompleted", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get success(): boolean {
    let value = this.get("success");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set success(value: boolean) {
    this.set("success", Value.fromBoolean(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get txId(): BigInt {
    let value = this.get("txId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set txId(value: BigInt) {
    this.set("txId", Value.fromBigInt(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get methodId(): Bytes {
    let value = this.get("methodId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set methodId(value: Bytes) {
    this.set("methodId", Value.fromBytes(value));
  }

  get txBlockNumber(): BigInt {
    let value = this.get("txBlockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set txBlockNumber(value: BigInt) {
    this.set("txBlockNumber", Value.fromBigInt(value));
  }

  get txTimestamp(): BigInt {
    let value = this.get("txTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set txTimestamp(value: BigInt) {
    this.set("txTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class InitiateAuthentication extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save InitiateAuthentication entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type InitiateAuthentication must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("InitiateAuthentication", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): InitiateAuthentication | null {
    return changetype<InitiateAuthentication | null>(
      store.get_in_block("InitiateAuthentication", id.toHexString())
    );
  }

  static load(id: Bytes): InitiateAuthentication | null {
    return changetype<InitiateAuthentication | null>(
      store.get("InitiateAuthentication", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get txId(): BigInt {
    let value = this.get("txId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set txId(value: BigInt) {
    this.set("txId", Value.fromBigInt(value));
  }

  get methodId(): Bytes {
    let value = this.get("methodId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set methodId(value: Bytes) {
    this.set("methodId", Value.fromBytes(value));
  }

  get txBlockNumber(): BigInt {
    let value = this.get("txBlockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set txBlockNumber(value: BigInt) {
    this.set("txBlockNumber", Value.fromBigInt(value));
  }

  get txTimestamp(): BigInt {
    let value = this.get("txTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set txTimestamp(value: BigInt) {
    this.set("txTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}