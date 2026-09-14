import fs from 'fs';
import { NodeIO } from '@gltf-transform/core';
import { KHRONOS_EXTENSIONS } from '@gltf-transform/extensions';

async function inspect(filePath, name) {
  console.log(`\n=================== INSPECTING ${name} ===================`);
  const io = new NodeIO().registerExtensions(KHRONOS_EXTENSIONS);
  const doc = await io.read(filePath);
  const root = doc.getRoot();

  console.log('Meshes count:', root.listMeshes().length);
  console.log('Materials count:', root.listMaterials().length);
  console.log('Nodes count:', root.listNodes().length);

  console.log('\n--- Materials: ---');
  root.listMaterials().forEach((mat, i) => {
    console.log(`[${i}] ${mat.getName()} (color: ${JSON.stringify(mat.getBaseColorFactor())}, roughness: ${mat.getRoughnessFactor()}, metalness: ${mat.getMetallicFactor()})`);
  });

  console.log('\n--- First 25 Nodes: ---');
  root.listNodes().slice(0, 25).forEach((node, i) => {
    const mesh = node.getMesh();
    console.log(`Node [${i}] name: "${node.getName()}", mesh: "${mesh ? mesh.getName() : 'none'}"`);
  });
}

async function run() {
  await inspect('public/models/honda_civic_rs.glb', 'Honda Civic RS');
  await inspect('public/models/honda_cr-v_2026.glb', 'Honda CR-V 2026');
}

run().catch(console.error);
