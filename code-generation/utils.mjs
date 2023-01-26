export const wrapInFunction = (data) => `export function content () { return ${data}; }`;
export const wrapInConst = (data) => `export const content = ${data}`;