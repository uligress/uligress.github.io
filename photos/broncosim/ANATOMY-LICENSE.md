# Anatomical data attribution

The airway anatomy originates from **BodyParts3D, © Database Center for Life Science (DBCLS)**, distributed under [Creative Commons Attribution-ShareAlike 2.1 Japan](https://creativecommons.org/licenses/by-sa/2.1/jp/). [BodyParts3D](https://lifesciencedb.jp/bp3d/).

The centerlines and signed distance field were obtained from the public anatomical data accompanying [RespHub Virtual Bronchoscopy](https://resphub.com/virtual-bronchoscopy/) on 2026-10-25, which credits BodyParts3D under that license:

- https://resphub.com/virtual-bronchoscopy/data/centerline.json
- https://resphub.com/virtual-bronchoscopy/data/airway_sdf.json
- https://resphub.com/virtual-bronchoscopy/data/airway_sdf.png

Unmodified source data are included in `data/`. The derived files `anatomy.json`, `anatomical.bin` and `anatomical-normals.bin` are also distributed under **CC BY-SA 2.1 Japan**. Changes by ung: centerline selection for 31 navigation stations, coordinate translation/scaling, reflection of the depth axis, surface extraction using Marching Cubes, triangle winding and normal correction. These adaptations do not imply endorsement by DBCLS or RespHub.

The RespHub application source code is not included. The interface, camera controls and procedural mucosa material were implemented separately. Three.js and MarchingCubes retain their MIT notice in `vendor/THREE-LICENSE.txt`.

## Gallery renders (2026-10-27)

The anatomical renders `01.jpg`, `02.jpg` and `03.jpg` in this gallery are adaptations by ung of the above mesh: centered, lit with a silver material and rendered from three camera angles. They are distributed under **CC BY-SA 2.1 Japan**. Original data and derived meshes are available in [/lab/broncosim/](/lab/broncosim/ANATOMY-LICENSE.md), including the [surface mesh](/lab/broncosim/anatomical.bin) and [normals](/lab/broncosim/anatomical-normals.bin). The `data/` references above refer to that simulator directory.
