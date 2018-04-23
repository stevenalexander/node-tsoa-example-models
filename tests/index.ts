import { User, UserCreationRequest, UserChangeOfStatusRequest, UserStatus } from '../src/index'
import 'mocha'
import * as assert from 'assert'

describe('User', () => {

  it('should have id', () => {
    let user: User = {
      id: 1234,
      email: 'string',
      name: 'Name',
      phoneNumbers: [],
      status: 'status'
    }

    assert.equal(user.id, 1234)
  })
})

describe('UserCreationRequest', () => {

  it('should have name', () => {
    let userCreationRequest: UserCreationRequest = {
      email: 'string',
      name: 'Name',
      phoneNumbers: []
    }

    assert.equal(userCreationRequest.name, 'Name')
  })
})

describe('UserChangeOfStatusRequest', () => {

  it('should have status', () => {
    let userChangeOfStatusRequest: UserChangeOfStatusRequest = {
      id: 1,
      status: UserStatus.Active
    }

    assert.equal(userChangeOfStatusRequest.status, 'ACTIVE')
  })
})
