import { BigInt, BigDecimal } from "@graphprotocol/graph-ts"
import { log } from '@graphprotocol/graph-ts'

import {
  Contract,
  Approval, 
  Burn,
  OwnershipTransferred,
  Transfer
} from "../generated/Contract/Contract"
import { User } from "../generated/schema"
let flag=false;
import { Address } from '@graphprotocol/graph-ts'

// export function handleApproval(event: Approval): void {
//   // Entities can be loaded from the store using a string ID; this ID
//   // needs to be unique across all entities of the same type
//   let entity = ExampleEntity.load(event.transaction.from.toHex())

//   // Entities only exist after they have been saved to the store;
//   // `null` checks allow to create entities on demand
//   if (entity == null) {
//     entity = new ExampleEntity(event.transaction.from.toHex())

//     // Entity fields can be set using simple assignments
//     entity.count = BigInt.fromI32(0)
//   }

//   // BigInt and BigDecimal math are supported
//   entity.count = entity.count + BigInt.fromI32(1)

//   // Entity fields can be set based on event parameters
//   entity._owner = event.params._owner
//   entity._spender = event.params._spender

//   // Entities can be written to the store with `.save()`
//   entity.save()

//   // Note: If a handler doesn't require existing field values, it is faster
//   // _not_ to load the entity from the store. Instead, create it fresh with
//   // `new Entity(...)`, set the fields that should be updated and save the
//   // entity back to the store. Fields that were not set or unset remain
//   // unchanged, allowing for partial updates to be applied.

//   // It is also possible to access smart contracts from mappings. For
//   // example, the contract that has emitted the event can be connected to
//   // with:
//   //
//   // let contract = Contract.bind(event.address)
//   //
//   // The following functions can then be called on this contract to access
//   // state variables and other data:
//   //
//   // - contract.allowance(...)
//   // - contract.allowed(...)
//   // - contract.approve(...)
//   // - contract.approveAndCall(...)
//   // - contract.balanceOf(...)
//   // - contract.balances(...)
//   // - contract.decimals(...)
//   // - contract.initialOwner(...)
//   // - contract.name(...)
//   // - contract.owner(...)
//   // - contract.phoenixAuthAddress(...)
//   // - contract.symbol(...)
//   // - contract.totalSupply(...)
//   // - contract.transfer(...)
//   // - contract.transferFrom(...)
// }

export function handleBurn(event: Burn): void {
  
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {
  let entity=User.load(event.params._from.toHex());
  if(entity==null){
    entity = new User(event.params._from.toHex())
    //BigDecimal.fromString('110000000000000000000000000')
  }
  let contract=Contract.bind(event.address);
  entity.balance= contract.balanceOf(Address.fromString(event.params._from.toHex()))
  entity.save()
  // if(entity==null){
  //   entity = new User(event.params._from.toHex())
  //   entity.balance = new BigDecimal(BigInt.fromI32(0))
  // }
  // if(entity2==null){
  //   entity2 = new User(event.params._to.toHex())
  //   if(!flag){
  //     entity2.balance =  new BigDecimal(event.params._amount);
  //   }
  //   else{
  //     entity2.balance = new BigDecimal(BigInt.fromI32(0))
  //   }
  // }
  // if(flag){

  //   entity.balance=entity.balance.minus(new BigDecimal(event.params._amount))
  //   entity2.balance=entity.balance.plus(new BigDecimal(event.params._amount))
  // }
  //entity2.save()
}
