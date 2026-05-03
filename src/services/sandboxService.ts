import { Sandbox } from '@e2b/sdk';

export async function createSandbox() {
    const sandbox = await Sandbox.create({ template: 'base' });
    return sandbox;
}
