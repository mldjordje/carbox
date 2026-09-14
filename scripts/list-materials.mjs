import { NodeIO } from '@gltf-transform/core';
import { KHRONOS_EXTENSIONS } from '@gltf-transform/extensions';

async function inspectMaterials(filePath, label) {
  console.log(`\n=================== ${label} ===================`);
  const io = new NodeIO().registerExtensions(KHRONOS_EXTENSIONS);
  const doc = await io.read(filePath);
  const root = doc.getRoot();

  console.log('Materials in', label);
  root.listMaterials().forEach((mat, i) => {
    console.log(`[${i}] "${mat.getName()}"`);
  });
}

async function run() {
  await inspectMaterials('public/models/honda_civic_rs.glb', 'CIVIC RS');
  await inspectMaterials('public/models/honda_cr-v_2026.glb', 'CR-V 2026');
}

run().catch(console.error);
