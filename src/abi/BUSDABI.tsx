export const BUSDABI = [
    // Read-Only Functions
    'function balanceOf(address owner) view returns (uint256)',
    'function decimals() view returns (uint8)',
    'function symbol() view returns (string)',
    'function allowance(address _owner, address _spender) view returns (uint256)',
    // Authenticated Functions
    'function approve(address spender, uint amount) returns (bool)',
    // Events
    'event Transfer(address indexed from, address indexed to, uint amount)',
] as const;
