"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjeolmiSender__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class InjeolmiSender__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_injeolmi, _signer, overrides) {
        return super.deploy(_injeolmi, _signer, overrides || {});
    }
    getDeployTransaction(_injeolmi, _signer, overrides) {
        return super.getDeployTransaction(_injeolmi, _signer, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.InjeolmiSender__factory = InjeolmiSender__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "fromChain",
                type: "uint256",
            },
            {
                name: "sender",
                type: "address",
            },
            {
                name: "sendId",
                type: "uint256",
            },
            {
                name: "amount",
                type: "uint256",
            },
            {
                name: "signature",
                type: "bytes",
            },
        ],
        name: "receiveOverHorizon",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
            {
                name: "",
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "received",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "signer",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "sender",
                type: "address",
            },
            {
                name: "toChain",
                type: "uint256",
            },
            {
                name: "receiver",
                type: "address",
            },
        ],
        name: "sendCount",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_signer",
                type: "address",
            },
        ],
        name: "setSigner",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "injeolmi",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
            {
                name: "",
                type: "address",
            },
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "sended",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "toChain",
                type: "uint256",
            },
            {
                name: "receiver",
                type: "address",
            },
            {
                name: "amount",
                type: "uint256",
            },
        ],
        name: "sendOverHorizon",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                name: "_injeolmi",
                type: "address",
            },
            {
                name: "_signer",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "signer",
                type: "address",
            },
        ],
        name: "SetSigner",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                name: "toChain",
                type: "uint256",
            },
            {
                indexed: true,
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                name: "sendId",
                type: "uint256",
            },
            {
                indexed: false,
                name: "amount",
                type: "uint256",
            },
        ],
        name: "SendOverHorizon",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "receiver",
                type: "address",
            },
            {
                indexed: true,
                name: "fromChain",
                type: "uint256",
            },
            {
                indexed: true,
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                name: "sendId",
                type: "uint256",
            },
            {
                indexed: false,
                name: "amount",
                type: "uint256",
            },
        ],
        name: "ReceiveOverHorizon",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051604080610c338339810180604052604081101561003057600080fd5b508051602090910151600080546001600160a01b03191633178082556040516001600160a01b039190911691907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055610b76806100bd6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638da5cb5b116100715780638da5cb5b1461026a5780638f32d59b14610272578063a9032dec1461027a578063ba133b3314610282578063ec79b185146102bc578063f2fde38b146102ee576100b4565b80630d268d0a146100b95780631c5489b714610182578063238ac933146101d05780635acfbbd3146101f45780636c19e7831461023c578063715018a614610262575b600080fd5b610180600480360360a08110156100cf57600080fd5b8135916001600160a01b036020820135169160408201359160608101359181019060a08101608082013564010000000081111561010b57600080fd5b82018360208201111561011d57600080fd5b8035906020019184600183028401116401000000008311171561013f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610314945050505050565b005b6101bc6004803603608081101561019857600080fd5b506001600160a01b03813581169160208101359160408201351690606001356106d7565b604080519115158252519081900360200190f35b6101d8610706565b604080516001600160a01b039092168252519081900360200190f35b61022a6004803603606081101561020a57600080fd5b506001600160a01b03813581169160208101359160409091013516610715565b60408051918252519081900360200190f35b6101806004803603602081101561025257600080fd5b50356001600160a01b0316610748565b6101806107ee565b6101d8610894565b6101bc6108a3565b6101d86108b4565b61022a6004803603608081101561029857600080fd5b506001600160a01b03813581169160208101359160408201351690606001356108c3565b61022a600480360360608110156102d257600080fd5b508035906001600160a01b03602082013516906040013561090b565b6101806004803603602081101561030457600080fd5b50356001600160a01b0316610a19565b805160411461036d5760408051600160e51b62461bcd02815260206004820152601860248201527f696e76616c6964207369676e6174757265206c656e6774680000000000000000604482015290519081900360640190fd5b33600090815260046020908152604080832088845282528083206001600160a01b0388168452825280832086845290915290205460ff16156103ae57600080fd5b6040805133606090811b60208084019190915260348301899052612019605484018190526001600160a01b038916831b60748501526088840188905260a88085018890528551808603909101815260c8850186528051908301207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060e8860152610104808601829052865180870390910181526101249095018652845194830194909420918601519486015192860151909491929060001a7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156104de5760408051600160e51b62461bcd02815260206004820152601b60248201527f696e76616c6964207369676e6174757265202773272076616c75650000000000604482015290519081900360640190fd5b8060ff16601b14806104f357508060ff16601c145b6105475760408051600160e51b62461bcd02815260206004820152601b60248201527f696e76616c6964207369676e6174757265202776272076616c75650000000000604482015290519081900360640190fd5b6002546040805160008152602080820180845288905260ff851682840152606082018790526080820186905291516001600160a01b039093169260019260a0808401939192601f1981019281900390910190855afa1580156105ad573d6000803e3d6000fd5b505050602060405103516001600160a01b0316146105ca57600080fd5b60015460408051600160e01b63a9059cbb028152336004820152602481018b905290516001600160a01b039092169163a9059cbb916044808201926020929091908290030181600087803b15801561062157600080fd5b505af1158015610635573d6000803e3d6000fd5b505050506040513d602081101561064b57600080fd5b50503360008181526004602090815260408083208f845282528083206001600160a01b038f168085529083528184208e8552835292819020805460ff1916600117905580518d81529182018c9052805192938f9390927f9b8cc913c3e25613faea2e6cfeb6dce457ef77c33f5d9f12119326580bec128f92908290030190a45050505050505050505050565b600460209081526000948552604080862082529385528385208152918452828420909152825290205460ff1681565b6002546001600160a01b031681565b6001600160a01b039283166000908152600360209081526040808320948352938152838220929094168152925290205490565b6107506108a3565b6107a45760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517fbb10aee7ef5a307b8097c6a7f2892b909ff1736fd24a6a5260640c185f7153b690600090a250565b6107f66108a3565b61084a5760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000546001600160a01b0316331490565b6001546001600160a01b031681565b600360205283600052604060002060205282600052604060002060205281600052604060002081815481106108f457fe5b906000526020600020016000935093505050505481565b60015460408051600160e01b6323b872dd0281523360048201523060248201526044810184905290516000926001600160a01b0316916323b872dd91606480830192602092919082900301818787803b15801561096757600080fd5b505af115801561097b573d6000803e3d6000fd5b505050506040513d602081101561099157600080fd5b505033600081815260036020908152604080832088845282528083206001600160a01b038816808552908352818420805460018101825581865294849020850188905582518581529384018890528251909591938a937f88a9fbb0dbf3ab14fab2aaeca87654c792e7f2de49b08a01bdc60820e4429e4692918290030190a495945050505050565b610a216108a3565b610a755760408051600160e51b62461bcd02815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610a7e81610a81565b50565b6001600160a01b038116610ac957604051600160e51b62461bcd028152600401808060200182810382526026815260200180610b256026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a165627a7a723058203f9aca5eaf89814af8c599e24cc391c391ce5dcdd531605d93143e937c332d3e0029";
//# sourceMappingURL=InjeolmiSender__factory.js.map