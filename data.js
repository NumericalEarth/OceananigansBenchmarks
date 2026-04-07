window.BENCHMARK_DATA = {
  "lastUpdate": 1775570731215,
  "repoUrl": "https://github.com/CliMA/Oceananigans.jl",
  "entries": {
    "Oceananigans.jl Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "danielkytezable@gmail.com",
            "name": "dkytezab",
            "username": "dkytezab"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4da9e657e0667d5425d3f496ee484e7f9bd8022d",
          "message": "Update fill_halo_regions.jl (#5415)\n\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>",
          "timestamp": "2026-03-19T23:39:37-07:00",
          "tree_id": "cf9ec3742913191330144092145d03296899ef3e",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/4da9e657e0667d5425d3f496ee484e7f9bd8022d"
        },
        "date": 1774006094030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03404856482,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09011743378,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35380088842,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06767667366999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04927359169,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0900495046,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11870242895000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.30004856238,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04825268817,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07630546175,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12912129539,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10085282805000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09726596857,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09591905446,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08670635079,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08945461179,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08985196727,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09993947427,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/5 tracers",
            "value": 0.12000862314,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "765740+giordano@users.noreply.github.com",
            "name": "Mosè Giordano",
            "username": "giordano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04fd2ed7572f6ad5f7e6f475add66ce2bcc1550a",
          "message": "Small improvements to the benchmarking pipeline (#5421)\n\n* [CI] Always run the publish benchmarks workflow\n\n* Remove ClimaSeaIce from benchmarking environment\n\nIt's completely unused\n\n* [CI] Use latest `actions/checkout` version",
          "timestamp": "2026-03-22T16:44:47Z",
          "tree_id": "5260da48613a5ebd7a438a2a947ca76e556a6096",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/04fd2ed7572f6ad5f7e6f475add66ce2bcc1550a"
        },
        "date": 1774215162229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.0328426548,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08987963709,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35396643529000005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06262079035,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049359601030000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08987170007999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11807342866000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29863121049,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04853061285,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07609708064000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12925448688,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10070502605,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09731363438000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09599079162,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08669810406,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08949075073,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08991884328,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09986326699999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/5 tracers",
            "value": 0.1202421949,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wagner.greg@gmail.com",
            "name": "Gregory L. Wagner",
            "username": "glwagner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e3dc01d444c7083c1d617642166340c00cd249fe",
          "message": "Extend TabulatedFunction to support 4D and 5D interpolation (#5417)\n\n* Extend TabulatedFunction to support 4D quadrilinear interpolation\n\nAdd support for 4-dimensional lookup tables with quadrilinear interpolation,\nfollowing the same patterns as the existing 1D/2D/3D implementations.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Extend TabulatedFunction to support 5D quintilinear interpolation\n\nSame mechanical pattern as 4D: adds 5D kernel, builder, evaluation method,\n32-term _interpolate, TabulatedFunction5D alias, and comprehensive tests.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Ignore legacy_benchmark linkcheck (directory removed in #5412)\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Apply suggestion from @glwagner\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-03-23T15:59:31-06:00",
          "tree_id": "a30659ab00cdc19d27a93eb9d2c36dd6729ca8fd",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e3dc01d444c7083c1d617642166340c00cd249fe"
        },
        "date": 1774321183617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.031532658910000004,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08984538513000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35163948436,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06491744668,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049168393469999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08959666444,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11797034095,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29969186256,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04804346985999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07609690101,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12885226862,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10046012181,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09714412268,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09589896522000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0865069118,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08912869713999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08969210221999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.0997129627,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/5 tracers",
            "value": 0.11969701357,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3d03e7aa3d496ef500719390c225117cfe409c8d",
          "message": "Streamline benchmarking pipeline (#5429)\n\n* Streamline benchmarking pipeline: remove duplicates, unify NSYS, fix concurrency\n\n- Remove duplicate benchmark runs: CATKE from Closure Sweep and\n  tripolar+zstar=false from Grid Type Sweep (already covered by Default)\n- Extract a single \"Default\" baseline run that gets injected into all\n  sweep charts, replacing the duplicated 360x180x50 entry in Resolution Sweep\n- Unify NSYS profiling into the benchmark step by wrapping the Default run\n  with nsys profile (no overhead), eliminating the separate NSYS step entirely\n- Consolidate Advection Sweep from 3 Julia invocations into 1 by zipping\n  momentum/tracer advection lists of equal length instead of crossing them\n- Report median kernel time instead of total in NSYS charts and summaries\n- Reduce default warmup steps from 10 to 5\n- Queue benchmark builds on main instead of canceling in-progress ones\n  (Buildkite concurrency group + GitHub Actions cancel-in-progress conditional)\n- Remove dead code (commented-out IO sweep)\n- Fix missing nsys_zstar.json artifact that was generated but never uploaded\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Parallelize benchmarks across GPU 0 and GPU 2, remove 5-tracer experiment\n\nSplit benchmark groups into two concurrent streams to reduce total wall time:\n- GPU 0 (foreground): Default (NSYS), Resolution sweep, Float type sweep, Closure sweep\n- GPU 2 (background): Advection sweep, Grid type sweep, Tracer count sweep\nResults are merged after both GPUs finish.\n\nAlso removes the 5-tracer (T,S,C1,C2,C3) experiment from the Tracer Count Sweep,\nkeeping only the 3-tracer case.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace NumericalEarth with DataDeps for benchmark bathymetry\n\nNumericalEarth.jl is only used in benchmarks to download and regrid\nbathymetry. Pre-generate the bathymetry files and serve them via\nDataDeps instead, removing the NumericalEarth dependency which is\ncurrently broken with the latest Oceananigans.\n\nAlso fix Buildkite pipeline interpolation of $! and $? by escaping\nthem as $$! and $$?.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* make the publish follow the pipeline\n\n* Pre-download bathymetry data before parallel GPU benchmarks\n\nFixes race condition where GPU 0 and GPU 2 processes concurrently\ntrigger the DataDeps download of bathymetry files to the same depot.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-27T06:21:46Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/3d03e7aa3d496ef500719390c225117cfe409c8d"
        },
        "date": 1774598134294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03194595404,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35183986341,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06620117009,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04934934019,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11836642944999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.30030145134,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04814823527,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07788111804,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12915444314,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.1006229349,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738016365,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09564457859999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08657489216,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08867287017,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09979503827,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09039273832,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09039273832,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "244ceed284d44a11d596eca3a2d479dbb5152661",
          "message": "Fix NSYS kernel charts and add kernel comparison to summary (#5440)\n\n* Fix NSYS kernel charts and add kernel comparison to summary\n\nThe NSYS kernel extraction was using a stale loop variable (`d` from a\nprevious loop) instead of the current iteration variable, so kernel chart\nentries were never emitted to the benchmark website. Move the extraction\nback into the main `for d in all_data` loop where it belongs.\n\nAlso add NSYS kernel comparison against main in the GitHub Actions job\nsummary, showing median time, baseline, and percentage change per kernel.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix token permissions for PR benchmark comments\n\nUse BENCHMARKS_TOKEN for repository_dispatch events (needs push access\nto the external OceananigansBenchmarks repo) and GITHUB_TOKEN for\npull_request events (needs PR comment access on this repo).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* fake commit\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-27T16:33:49Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/244ceed284d44a11d596eca3a2d479dbb5152661"
        },
        "date": 1774635629780,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01252,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9576715,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7828245,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.557426,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.528209,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.520241,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.618183,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270968,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340702,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525693,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02946350052,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35170072867,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06635712049,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04941735279000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11839795846,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29974474885,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04813939653,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07597942123,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12939755415,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060468569999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09736463723,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09562428461,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0865149562,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08869534321,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09977233119,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09036038452,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09036038452,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jackdfranklin",
            "username": "jackdfranklin",
            "email": "144433437+jackdfranklin@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f70a4e492e5e24f2a12945c53561dbc396018d5c",
          "message": "Switch biases to be enums rather than distinct types. (#5318)\n\n* Switch biases to be enums rather than distinct types.\nMaking this change reduces the kernel execution time by reducing the branching in interpolations.\nI think that the since the bias was implemented as two types, Julia compiled to two different\nfunctions and then branched between them.\n\n* Fix tests for immersed advection\n\n* Temporarily disable sharding tests\n\n---------\n\nCo-authored-by: Jack Franklin <jdf58@cam.ac.uk>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Mosè Giordano <m.giordano@ucl.ac.uk>",
          "timestamp": "2026-03-27T22:46:39Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/f70a4e492e5e24f2a12945c53561dbc396018d5c"
        },
        "date": 1774667022357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.013005,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 2.6095715,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 2.4392685,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6158315,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270522,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 1.043131,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 1.040923,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 1.035547,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339487,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526589,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03184448347,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.26203841452,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.059231267350000005,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.0337450151,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.09380287398,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29418761069,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048287356270000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06189951273,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.09998636162,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.0700525928,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.07194222790999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.07968828034,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.05725823513,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.06513191983,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.07367442669,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.06870216942,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.06870216942,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "William Moses",
            "username": "wsmoses",
            "email": "gh@wsmoses.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "14f35a2ab5d23753745b525813e6995ec6567a46",
          "message": "Revert \"Switch biases to be enums rather than distinct types. (#5318)\" (#5449)\n\nThis reverts commit f70a4e492e5e24f2a12945c53561dbc396018d5c.",
          "timestamp": "2026-03-29T16:52:48Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/14f35a2ab5d23753745b525813e6995ec6567a46"
        },
        "date": 1774808863719,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012202,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9585705,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7776115,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.553234,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.524723,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.517011,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6178795,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270842,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340862,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526269,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03174941831,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35176655005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06358511806,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049371394049999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11834337352,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29950817934,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04840498223,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07610803865,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12884017587000002,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060143865,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09740798526000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09562017361000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0865001852,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08864160877999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09978739596000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09016108289,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09016108289,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b91775407a52bc73a8e9ac93f07b785cdc336fd3",
          "message": "Fix publish-benchmarks pipeline token permissions (#5448)",
          "timestamp": "2026-03-30T07:40:09Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b91775407a52bc73a8e9ac93f07b785cdc336fd3"
        },
        "date": 1774862055768,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01204,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.956137,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.782202,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.557456,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.528305,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.520945,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.61807,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270521,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338686,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525789,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03031406078,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35176838755,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06892611466,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04940980415,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11842971006999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29967811356999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04818585705,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07606734718000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.1291753834,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060960741000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09737208024999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09566392153,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08652563082,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08864690713,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09966160125,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09024320928,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09024320928,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dependabot[bot]",
            "username": "dependabot[bot]",
            "email": "49699333+dependabot[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "16482f541dab40f16245a430c42df0df6b0ced85",
          "message": "Bump codecov/codecov-action from 5 to 6 (#5455)\n\nBumps [codecov/codecov-action](https://github.com/codecov/codecov-action) from 5 to 6.\n- [Release notes](https://github.com/codecov/codecov-action/releases)\n- [Changelog](https://github.com/codecov/codecov-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/codecov/codecov-action/compare/v5...v6)\n\n---\nupdated-dependencies:\n- dependency-name: codecov/codecov-action\n  dependency-version: '6'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Simone Silvestri <silvestri.simone0@gmail.com>",
          "timestamp": "2026-03-30T07:41:41Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/16482f541dab40f16245a430c42df0df6b0ced85"
        },
        "date": 1774873304759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012648,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.953208,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.768105,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.554576,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.525968,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.515984,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.61519,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269047,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339357,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526461,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02863122839,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35173997018000003,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06359759834,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04931854891,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11833966018,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.30056910716,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04816015365,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07599710327999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12916011952,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10077292009000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09725464227,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09563176298,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08659765502000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08868584672,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09977110524,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09046669029,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09046669029,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e583ed7856fd82e78031610bea6a2844333724bb",
          "message": "Replace PR benchmark polling with Buildkite dispatch (#5457)\n\n* Replace PR benchmark polling with Buildkite dispatch notification\n\nThe GHA publish-benchmarks workflow previously polled Buildkite for up to\n~9.5 hours waiting for PR benchmark builds to complete, risking the GHA\n6-hour hard limit. Now Buildkite notifies GHA via repository_dispatch for\nall branches (not just main), eliminating the polling entirely.\n\n- Buildkite: remove branch gate on notify step, send branch + PR number\n- GHA: remove pull_request trigger and polling loop\n- Main: pushes to external repo + benchmark-action (unchanged behavior)\n- PRs: posts comparison comment via gh CLI using github.token\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Only post benchmark comparison in PR comments\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix benchmark-action using wrong commit SHA for repository_dispatch\n\nFor repository_dispatch events, github.sha resolves to HEAD of the\ndefault branch at dispatch time, not the actual benchmarked commit.\nWhen two commits land close together, the second commit's SHA gets\nused for both entries in data.js, causing the first commit to be\nmissing from the benchmark charts.\n\nPass the actual commit from client_payload via the ref input so\nbenchmark-action tags data.js entries with the correct commit.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Enable comments on benchmark alerts\n\n* Add descriptive run-name to publish-benchmarks workflow\n\nReplace the default \"benchmarks_complete\" display title with useful\ncontext: branch and commit SHA for main builds, branch and PR number\nfor pull request builds.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Include NSYS kernel comparison in PR benchmark comments\n\nThe NSYS kernel profiling table was only in the job summary but not\nin the PR comment. Save it to a separate file during the summary step\nand append it to the PR comment.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-30T15:34:27Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e583ed7856fd82e78031610bea6a2844333724bb"
        },
        "date": 1774892056755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.011653,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.953413,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.780823,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.557551,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.528464,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.520144,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6178295,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270583,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34147,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525917,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03250673787,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35161204709000005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06293472507,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04955679056,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11830130539,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29982664258,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048189193660000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07615340712,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12874226552,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10058491707,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09724954102,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09561116672,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08644612195000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08862457919000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09963550853999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0901942431,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0901942431,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c8bfcc6fce74f0cba308401d8490d0215986a6a1",
          "message": "Add a hydrostatic barotropic soliton case validation for hydrostatic open boundaries (#5387)\n\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\nCo-authored-by: tomchor <13205162+tomchor@users.noreply.github.com>\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>",
          "timestamp": "2026-03-31T01:52:18Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/c8bfcc6fce74f0cba308401d8490d0215986a6a1"
        },
        "date": 1774927611994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012903,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9558315,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7851125,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.55176,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522672,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.512913,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.615574,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269337,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338142,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526878,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.0329064457,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35159978279,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06546936735,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04941995672,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11837138537,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29967749573999997,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04838050309,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07599333103,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12942801787,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10070344413999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738793204,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09564189963,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08652034911999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0888010727,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09975679912,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09043109321,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09043109321,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5acb0fa4939782d116778eec3ace534583dfc154",
          "message": "Remove duplicate turbulence closure test from GitHub Actions (#5460)\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-31T10:53:04Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/5acb0fa4939782d116778eec3ace534583dfc154"
        },
        "date": 1774960148497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01268,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.952536,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.786665,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.563952,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.533905,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.525776,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.615462,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269176,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338749,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526717,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03211362198,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35161816211999997,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.07220372699000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04928934797,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11817940930000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29970951516,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04817885473,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07609447741,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12883372876,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10059945585999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738020865,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09579065112,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647132399,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08865079053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09994079148000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09029461517,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09029461517,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "083554c3e5c0c109396d8ef24091b79d328789a5",
          "message": "[CI] Run sharding tests under earlyoom (#5453)\n\n* [CI] Run sharding tests under earlyoom\n\n* Do not override `XLA_FLAGS` when running the tests\n\n* [CI] Upload XLA dump as artifact\n\n* [CI] Also upload MLIR modules dumped by Reactant\n\n* [CI] Create `TMPDIR`",
          "timestamp": "2026-03-31T13:13:36Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/083554c3e5c0c109396d8ef24091b79d328789a5"
        },
        "date": 1774970111110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01204,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.952074,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7794015,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.556496,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.529778,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522001,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6183105,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270872,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340318,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525982,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03269888169,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.351809355,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06364180264,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04927214394,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11862391743,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29980709465,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04817612028,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07610915356999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12886416483,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10066228188,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09754725631,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09595524739,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647837031,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08867298799000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09969905926999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09026271434,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09026271434,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jackdfranklin",
            "username": "jackdfranklin",
            "email": "144433437+jackdfranklin@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a2f69db950bf20aeed26c8eec20d07da400c5316",
          "message": "Automated dependency checking (#5432)\n\n* Add automatic checking for Julia dependency updates\n\n* Add automatic dependency checks\nChecks for minimum version compatability, and tries to resolve all\nprojects (./, test, benchmarking)\n\n* Change Reactant core version\n\n* Fix mode name\n\n* Remove Cache from dependency check\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Add check for dependency resolution\n\n* Fix typo in filename\n\n* Remove cache from resolve check\n\n* Combine commands into one run\n\n* List project files in downgrade action\nThis should reduce the number of individual CI jobs\n\n* Add General registry\n\n* Remove CompatHelper CI\n\n* Apply suggestions from code review\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Modify dependabot.yml\nGroup dependencies together and ignore Oceananigans\n\n* Change working directory\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-03-31T16:53:54Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/a2f69db950bf20aeed26c8eec20d07da400c5316"
        },
        "date": 1774991316063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012388,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9544195,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.785077,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.556814,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.527758,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.518222,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.615557,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269175,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339486,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.527036,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03299234826,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35177457113000005,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06604397429,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04936768707,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11840196614,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29980739898,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048145966619999994,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07598942422999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12941860307,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10071841504,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738560591,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09561132116,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08660352199,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08877773638000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09986214337,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09022021087000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b706e8f057b9f507eb471f44b8135f90a43e8f37",
          "message": "Update number of ambiguities (#5462)",
          "timestamp": "2026-03-31T17:03:33Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b706e8f057b9f507eb471f44b8135f90a43e8f37"
        },
        "date": 1774996955519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012872,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.942664,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.773385,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.564976,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.53704,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.529073,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.61807,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270905,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34003,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525693,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03318315909,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35156608695999997,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06335616603,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049345585239999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11834928675,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29965674297,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04832557279000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.0760063186,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12940447443,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10068663881,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09736977665999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09565993414,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647094794999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08867518413000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09980501828999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.0917482934,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.0917482934,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "17fdb6620b5aab71968199f0b19c222f885222ce",
          "message": "Clear ambiguities in `conditional_length` (#5456)\n\n* clear ambiguities\n\n* update total ambiguities\n\n---------\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-04-01T06:33:11Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/17fdb6620b5aab71968199f0b19c222f885222ce"
        },
        "date": 1775031084352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012585,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.959018,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.781115,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.56261,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.534674,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526131,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.615767,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269144,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33971,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.527101,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03535331308,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35188018731,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.07239845174,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04941951762999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11834249,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29970490534,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04818904777,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07607752596,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12892254880999998,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10062409664000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09762316017,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09567402989,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08661090548,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08865784518,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.10113065605999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09070751053000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Mosè Giordano",
            "username": "giordano",
            "email": "765740+giordano@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e369fb3bb111b9aeaf794dca092b42d83c64b815",
          "message": "Remove dependency on `CUDA_Runtime_jll` in `test/` environment (#5466)",
          "timestamp": "2026-04-01T06:48:38Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/e369fb3bb111b9aeaf794dca092b42d83c64b815"
        },
        "date": 1775036635889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012071,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.953143,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.78548,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.560912,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.53064,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.52072,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6154145,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269176,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339422,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526364,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.029120715590000002,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35178579819,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06916613328,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04974306476,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11841226578000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29960356948,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04819069538,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07608342473,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12883674341,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10067042219,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09738310344000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09564038723,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08651638351,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08871245113000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09962768071,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09039081124000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3d31393bed99a1d9af5adafda91695ea23408a87",
          "message": "add to README (#5467)",
          "timestamp": "2026-04-01T11:01:30Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/3d31393bed99a1d9af5adafda91695ea23408a87"
        },
        "date": 1775047076637,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012201,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9530805,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.784506,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.558737,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.530833,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522545,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.618119,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.270489,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340062,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525885,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.030920777450000003,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35178324363,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06465691874,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04934413996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11854144482000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29958343217,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.049499052099999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07598504905999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12941252191,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10065263592000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09731718126000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09612405369999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08650634012,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08862048978,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.10000299519,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09148590679,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09148590679,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fce0e977ff69fcd650fb731072b70fdef8fd7178",
          "message": "Add BulkDrag boundary conditions documentation (#5464)\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-04-01T13:21:03Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/fce0e977ff69fcd650fb731072b70fdef8fd7178"
        },
        "date": 1775064203069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012646,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.954215,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.779112,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.561903,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.531152,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.524464,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.618565,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.271032,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.341277,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525852,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03307938633,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35179613951,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06475120724,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049504803449999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11829061497,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29926607992,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04817820404,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07607728230000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12893168176,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10073477626,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09730669279000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09567783371000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08648701193000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08877035865999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.0999785032,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09022997606000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tomás Chor",
            "username": "tomchor",
            "email": "tomaschor@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81eba9602c57b953598f9e16943c8f722df8c621",
          "message": "Fill small documentation gaps (Units, SphericalCoriolis, background_closure_fluxes, PiecewiseLinearMask) (#5463)\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>\nCo-authored-by: Copilot <175728472+Copilot@users.noreply.github.com>\nCo-authored-by: tomchor <13205162+tomchor@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\nCo-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>",
          "timestamp": "2026-04-01T19:22:24Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/81eba9602c57b953598f9e16943c8f722df8c621"
        },
        "date": 1775077078869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.01268,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9661995,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.780617,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.564496,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.534096,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.527152,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.617622,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.271032,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.34003,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.525949,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03071205318,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35175096066,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.06547799734,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049532449959999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11831500560000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29983120369,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048361643079999996,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07602318416,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12946672332,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10063115235,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09729024514000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09569879253,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647486580000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08892100034,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09978657776000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09032658042,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09032658042,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a7b8beddea8fbfe6a96c4bc85652d6f6ebd27542",
          "message": "(0.106.4) Move NetCDF output attribute methods from extension to Models module (#5469)\n\n* Move default_output_attributes and add_schedule_metadata! stubs to main module\n\nThese functions were defined entirely in OceananigansNCDatasetsExt despite\nnot depending on NCDatasets. This prevented downstream extensions (e.g.\nClimaSeaIce) from adding methods at compile time, forcing them to use\n__init__ + @eval which breaks incremental compilation on Julia 1.12.\n\nBy declaring function stubs in src/OutputWriters and importing them in\nthe extension, any package extension can now extend these functions with\na simple `import` + method definition at compile time.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Move default_output_attributes and add_schedule_metadata! to OutputWriters\n\nThese methods have no dependency on NCDatasets and belong in the main\nOutputWriters module, not the NCDatasets extension. Also removes the\nnow-unused type aliases and imports from the extension.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix module load order: define output attribute methods after Models\n\nOutputWriters is included before BuoyancyFormulations and Models, so the\nmethod definitions can't live directly in OutputWriters.jl. Instead, keep\nstubs in OutputWriters and define the actual methods in a separate file\n(output_attributes.jl) that is included from Oceananigans.jl after Models.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add missing using statements for output_attributes.jl\n\nThe file is included at top-level Oceananigans scope before the\nusing .Grids etc. statements, so it needs its own explicit imports.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* some cleanup\n\n* Move output attribute methods to Models, keep only generic fallback in OutputWriters\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add default_tracer_attributes(::Nothing) fallback for models without buoyancy\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>",
          "timestamp": "2026-04-02T12:54:55Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/a7b8beddea8fbfe6a96c4bc85652d6f6ebd27542"
        },
        "date": 1775140281217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 4.012967,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9521675,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7795765,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.559728,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.528656,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.519505,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.6154945,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 1.269048,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339422,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526941,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03284986284,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.35175059750000004,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.07247356824,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049256724839999995,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11827665722000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29997191297000003,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.048146753230000006,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.07601109537,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12970346708,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10051204169,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.09779388704,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.09565459623,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08647543519999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08874455388,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09980394780999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.09055744532,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.09055744532,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "89eead1e9403a7e48e252b26a4cf832a3b841ef8",
          "message": "Use active_cells_map for CATKE on ImmersedBoundaryGrids (#5447)\n\n* Use active_cells_map for CATKE kernels on ImmersedBoundaryGrids\n\nAdd `launch_over_active_cells!` utility that handles launching kernels\nover active cell maps, including the distributed case where the map is\na NamedTuple of sub-maps. Use it for all CATKE kernel launches\n(closure fields, TKE diffusivity, TKE time-stepping) and the surface\nbuoyancy flux kernel. This avoids computing over immersed (inactive)\ncells, improving performance for ImmersedBoundaryGrids.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Unify active cells map API and extend launch! for NamedTuple maps\n\n- Add `get_active_cells_map(grid, Val(:xyz))` returning full interior\n  active cells (single array or NamedTuple for distributed)\n- Add `get_active_cells_map(grid, Val(:xy))` for active columns,\n  replacing `get_active_column_map`\n- Extend `_launch!` to iterate over NamedTuple sub-maps (distributed)\n- Use active cells maps in all CATKE kernel launches\n- Remove `launch_over_active_cells!` and `get_interior_active_cells`\n- Update SplitExplicit and tests to use new API\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* this should remain\n\n* Use active_cells_map for TKEDissipation kernels on ImmersedBoundaryGrids\n\nSame treatment as CATKE: pass active_cells_map from\nget_active_cells_map(grid, Val(:xyz)) to all launch! calls in\ncompute_closure_fields! and time_step_tke_dissipation_equations!.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Use active_cells_map in TKEDissipation compute_closure_fields!\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-02T14:59:29Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/89eead1e9403a7e48e252b26a4cf832a3b841ef8"
        },
        "date": 1775147870842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.957688,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.780729,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.561809,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.532881,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526161,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.987412,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5843905,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.340926,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642812,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526109,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03035552977,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32212776139,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.059984502190000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04933951715,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11020064728,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29157936415999997,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.040059430300000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.0680022054,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12069413448,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060359341,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.0892632939,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08720614685,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08658369,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08132887684,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09168793155999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08212400663000001,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lois Baker",
            "username": "loisbaker",
            "email": "lbaker@ed.ac.uk"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ddce08b1d82c324492c38b0474d41d204c61b90d",
          "message": "Pass grid to poisson_eigenvalues and set eigenvalues to be `eltype(grid)` (#5373)\n\n* Pass grid to poisson_eigenvalues, define with Float32 for Metal and add test\n\n* Remove trailing whitespace\n\n* Explicitly return Float64 Poisson eigenvalues\n\n* Return Poisson eigenvalues with eltype(grid) on Metal\n\n* Rename `JULIA_DEPOT_PATH` to the `.julia` for buildkite (#5368)\n\n* (0.105.4) Add basic tests for Reactant-Oceananigans correctness (#5093)\n\n* Add basic reactant correctness tests\n\n* comment out other tests\n\n* add more grids\n\n* implement take Gu tendency\n\n* test with different raise options\n\n* test raise=true and raise=false\n\n* raise=true\n\n* add fake halo filling kernels\n\n* filter triply periodic tests\n\n* add reactant to weakdeps\n\n* add more tests\n\n* updates\n\n* clean up\n\n* update report\n\n* fix\n\n* fix\n\n* update report\n\n* Update test_reactant_correctness.jl\n\n* Refactor new_data function to remove ReactantState\n\n* Change total_size function parameter type to ShardedGrid\n\n* try to restrict offset_array for sharding a bit more\n\n* test raise_first too\n\n* fix imports\n\n* Comment out failing Reactant correctness tests and remove raise=true mode\n\nDisable raise=true mode across all tests due to non-deterministic segfaults\nin Reactant's CanonicalizeLoopsPass (MLIR bug). Comment out TripolarGrid\nhalo tests (Zipper BC compilation crashes) and HydrostaticFreeSurfaceModel\ntime-stepping tests (MLIR codegen error: incorrect operand count). The\nremaining 102 tests (halo filling + Gu tendencies) pass reliably.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix CI to actually run Reactant correctness tests\n\nTEST_GROUP was set to \"reactant\" which matches no group in runtests.jl,\nso CI was running 0 Reactant tests and reporting success.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Attempt fix\n\n* Fix fix\n\n* Whitespace\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Delete test/fake_halo_fill_kernels.jl\n\n* Delete test/test_fake_halo_fill.jl\n\n* Delete reactant_raise_true_report.md\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Update runtests.jl\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Update test_reactant_correctness.jl\n\n* Apply suggestion from @glwagner\n\n* Use halo=(3,3,3) in Reactant correctness tests and skip initialization_update_state\\! for Reactant models\n\n- Increase halo size from (1,1,1) to (3,3,3) in fill_halo_regions\\! tests\n- Re-enable Bounded LLG topology test\n- Add no-op initialization_update_state\\! for ReactantHFSM to defer\n  kernel execution to first_time_step\\! (runs inside @compile context)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Revert fill_halo tests to halo=(1,1,1) to avoid MLIR pass bug on Linux x64\n\nhalo=(3,3,3) with periodic boundaries triggers a Reactant MLIR\noptimization pass failure on Linux x64. Keep halo=(1,1,1) for\nfill_halo tests (which pass) while compute_simple_Gu\\! retains\nhalo=(3,3,3) as required by WENO.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add MWE for Reactant MLIR pass failure on periodic halo kernels\n\nStandalone reproducer (no Oceananigans dependency) for the MLIR\noptimization pass bug on Linux x64 with halo size H=3.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Simplify MWE to single kernel\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Update MWE to reproduce ka_with_reactant error without CUDA\n\nRemove `using CUDA` so the MWE reproduces the same MethodError\nas Oceananigans: ka_with_reactant has no method without ReactantCUDAExt.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Comment out RectilinearGrid Gu tests with Periodic topologies\n\nReactant's MLIR raise pass fails on periodic halo-filling kernels with\nhalo >= 2 (\"cannot raise if yet\" error). Add standalone MWE reproducer.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Delete test/reactant_raise_periodic_halo_mwe.jl\n\n* Update MWE to reproduce compute_simple_Gu\\! CI test failure\n\nMinimal script using Oceananigans that reproduces the fill_halo_regions\\!\nraise=true failure on periodic topologies with halo=(3,3,3).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix MWE imports and usage instructions\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Use view instead of indexing in cpu_face_constructor_r (#5376)\n\n* Use view instead of indexing in cpu_face_constructor_r\n\nAvoids scalar indexing errors when grid data is stored on\nnon-CPU architectures (e.g. Reactant ConcreteIFRTArray).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add on_architecture(::CPU, ::OffsetArray{..., <:AnyConcreteReactantArray})\n\nThe generic fallback on_architecture(arch, a) = a doesn't convert\nOffsetArrays wrapping Reactant arrays. This adds a proper method\nthat converts the underlying Reactant array to Array while preserving\nthe OffsetArray wrapper.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Delete test/reactant_raise_periodic_halo_mwe.jl\n\n* Add maybe_initialize_state\\! no-op for Reactant models\n\nThe iteration == 0 check in maybe_initialize_state\\! evaluates at trace\ntime (ConcreteRNumber(0) == 0 is true), causing a redundant update_state\\!\nto be compiled into every time_step\\!. Make it a no-op for Reactant models\nsince first_time_step\\! handles initialization explicitly.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Apply suggestion from @glwagner\n\n* Replace bcs... splatting with explicit indexing in fill_halo_event\\!\n\nExtends the fix from 0807efecf to polar_boundary_condition.jl and\nfill_halo_regions_open.jl. Reactant cannot reconcile different call\narity from splatting variable-length tuples into the same kernel.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Pass clock and fields to only_local_halos fill_halo_regions\\! calls\n\nAvoids empty args tuple in fill_halo_event\\!, which causes Reactant\nMLIR compilation failures (empty tuples get eliminated at call sites\nbut not in function definitions, causing operand count mismatch).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add nothing to tendency kernels for Reactant compatibility\n\nKA kernels with implicit Float64 return values (from array assignment\nas last expression) cause Reactant to generate a Returns{Float64}\nparameter in the LLVM function definition that doesn't match the call\nsite. Adding `nothing` as the last expression prevents this.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add kernel_clock workaround for Reactant MLIR/LLVM lowering bug\n\nReactant/Enzyme generates a phantom pointer parameter when mutable structs\ncontaining ConcreteIFRTNumber scalar fields are placed in tuples passed to\nKA kernels. This causes 'llvm.call incorrect number of operands' errors.\n\nThe workaround converts Clock to a NamedTuple (via kernel_clock) before\nplacing it in kernel argument tuples. The NamedTuple has identical field\naccess semantics and doesn't trigger the LLVM bug.\n\n- kernel_clock(clock) defaults to identity (no-op on CPU/GPU)\n- Reactant extension overrides to return NamedTuple\n- Applied to all HFSM call sites: tendency kernels, fill_halo_regions\\!,\n  implicit_step\\!, flux BCs, split-explicit substepping\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* revert\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Test more things\n\n* is it about the halo size?\n\n* run Reactant tests on 1.11.9\n\n* put halo back to 3\n\n* simplify SubArray convertion to arch\n\n* emit something silly for prettytime of tracednumber\n\n* try to run reactant tests with checkbounds=auto\n\n* fix dispatch\n\n* resolve multi region ambiguity\n\n* Apply suggestion from @glwagner\n\n* multiregion fill halo fix\n\n---------\n\nCo-authored-by: William Moses <gh@wsmoses.com>\nCo-authored-by: dkytezab <danielkytezable@gmail.com>\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Bump julia-actions/cache from 2 to 3 (#5382)\n\nBumps [julia-actions/cache](https://github.com/julia-actions/cache) from 2 to 3.\n- [Release notes](https://github.com/julia-actions/cache/releases)\n- [Commits](https://github.com/julia-actions/cache/compare/v2...v3)\n\n---\nupdated-dependencies:\n- dependency-name: julia-actions/cache\n  dependency-version: '3'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\n\n* Remove poisson_eigenvalues from OceananigansMetalExt\n\n* Set Poisson eigenvalues to eltype(grid)\n\n* Add tests for poisson_eigenvalues float type\n\n* Update docstrings for poisson_eigenvalues\n\n* Remove trailing whitespace\n\n* Fix missing newline at end of test_metal.jl\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: Tomás Chor <tomaschor@gmail.com>\nCo-authored-by: Gregory L. Wagner <wagner.greg@gmail.com>\nCo-authored-by: William Moses <gh@wsmoses.com>\nCo-authored-by: dkytezab <danielkytezable@gmail.com>\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-04-03T04:23:19Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/ddce08b1d82c324492c38b0474d41d204c61b90d"
        },
        "date": 1775386587580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.953992,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7892565,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.563696,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.535248,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526672,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.987828,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.584438,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339997,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.64262,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526365,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.02992426919,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32214802279,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.055182621779999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04929122105,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11015577646000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29177035101000004,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04001750408,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06798998243,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12074479551,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10066782755,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08931467895,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08722913854,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.0865754811,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08129923477,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09155559335999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08242861583,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08242861583,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Gregory L. Wagner",
            "username": "glwagner",
            "email": "wagner.greg@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "446b88ea6f7ab580d50c62bb1fcc6184fe80ba1c",
          "message": "Add Reactant tests for single column grids (#5454)\n\n* Add Reactant tests for single column (Flat, Flat, Bounded) grids\n\nSingle column grids take a different code path through update_state!\nand fill_halo_regions! that is currently untested with Reactant.\nThese tests cover construction, compiled time stepping, the\nTKEDissipationVerticalDiffusivity closure, and Enzyme reverse-mode\ngradients for the single column case.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Mark TKEDissipation compiled time_step\\! as @test_broken\n\nThe batched tridiagonal solver used by TKEDissipationVerticalDiffusivity\nfails Reactant MLIR compilation with an 'arith.cmpi' type mismatch error.\nModel construction still works; only the compiled time-stepping is broken.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Change TKE test from @test_broken to @test since it passes on CI\n\nThe TKEDissipationVerticalDiffusivity test passes on Linux x64 CI.\nThe MLIR arith.cmpi error only occurs on macOS ARM64.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-03T14:00:32Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/446b88ea6f7ab580d50c62bb1fcc6184fe80ba1c"
        },
        "date": 1775392348167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.956792,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.784121,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.565584,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.534096,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.523377,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.987796,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.58415,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.339998,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642876,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526397,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.033873430600000004,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32203304144999995,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.060858266519999996,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04964806188,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11025083849,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29164315383,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.040434040510000005,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06802859072,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12072741434999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10066384290000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08941213433,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08729751331999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08654778927000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.0812677424,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09149568889,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08232567987,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08232567987,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Gregory L. Wagner",
            "username": "glwagner",
            "email": "wagner.greg@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c69b6eb282a03fbbf568095e25e4f53a68a2306b",
          "message": "Fix ContinuousBoundaryFunction dispatch ambiguity on Flat grids (#5472)\n\n* Fix ContinuousBoundaryFunction dispatch ambiguity on Flat grids\n\nWhen a grid dimension is Flat, its location type is Nothing, which\ncollides with the convention that the boundary-normal dimension also\nhas location Nothing. This caused method ambiguity errors for\nContinuousBoundaryFunction getbc on grids like (Flat, Flat, Bounded).\n\nAdd grid-type-constrained disambiguation methods for all combinations\nof two and three Nothing location parameters, for both domain boundary\n(2-index) and immersed boundary (3-index) getbc methods.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Use normal FieldBoundaryConditions constructor in test\n\nUse regularize_field_boundary_conditions to process BCs, matching\nhow model constructors handle user-provided boundary conditions.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace grid-type disambiguation with BoundaryNormal sentinel type\n\nInstead of adding grid-type-constrained methods (which created more\nambiguities than it resolved), use a BoundaryNormal sentinel type\nfor the boundary-normal direction in ContinuousBoundaryFunction.\n\nPreviously, Nothing was used for both Flat dimensions and boundary-\nnormal directions, causing dispatch ambiguity. BoundaryNormal is a\ndistinct type that unambiguously marks the boundary-normal direction,\neliminating all practical ambiguities without adding any new methods.\n\nAqua recursive ambiguity count: 343 (baseline) → 325 (with fix).\nCBF-specific ambiguities: 6 theoretical (unchanged, unreachable).\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Update location tests to expect BoundaryNormal instead of Nothing\n\nThe boundary-normal direction now uses BoundaryNormal instead of\nNothing, so the location assertions in the integration tests need\nto be updated accordingly.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add field_dependencies test for ContinuousBoundaryFunction on Flat grid\n\nExercises the interpolation_code(::BoundaryNormal, ...) methods to\nimprove patch coverage.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* better name for new location\n\n* Improve coverage: build and time-step model on Flat grid\n\nReplace explicit interpolation_code tests with a full model build\nand time_step! on a (Flat, Flat, Bounded) grid with field-dependent\nContinuousBoundaryFunction. This exercises the complete regularization\npath including all BoundaryAdjacent interpolation_code methods.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-03T20:32:23Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/c69b6eb282a03fbbf568095e25e4f53a68a2306b"
        },
        "date": 1775398129370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.9470465,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.7757835,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.559119,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.530032,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.522703,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.987219,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.583893,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.33987,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642812,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526173,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.030997807619999998,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.3221828744,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.056027038290000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.04942129855,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11036005152,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.29157554246,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.04005825206,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06790602566,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12135860277999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10060887383,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08920941201,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08718023176,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08655582021000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08131729046,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09144085671999999,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08220706613,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08220706613,
            "unit": "s/timestep"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Simone Silvestri",
            "username": "simone-silvestri",
            "email": "silvestri.simone0@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b71a2d71462b68cdd15da12fcf596e4cc616dd35",
          "message": "(0.106.5) Tick the clock before updating the state in `SplitRungeKutta` (#5477)\n\n* this will work\n\n* update version\n\n* add this\n\n* particles out of the loop\n\n* remove whitespace\n\n* much better",
          "timestamp": "2026-04-07T12:32:00Z",
          "url": "https://github.com/CliMA/Oceananigans.jl/commit/b71a2d71462b68cdd15da12fcf596e4cc616dd35"
        },
        "date": 1775570730574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Default/tripolar 360x180x50 F64/NVIDIA TITAN V/default",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gu_",
            "value": 3.95678,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gv_",
            "value": 3.782157,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.556883,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.526931,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_hydrostatic_free_surface_Gc_",
            "value": 2.519379,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__rk_substep_turbulent_kinetic_energy_",
            "value": 1.988277,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_CATKE_closure_fields_",
            "value": 1.5810955,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu__compute_w_from_continuity_",
            "value": 0.338558,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_compute_TKE_diffusivity_",
            "value": 0.642908,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "NSYS Kernels/EarthOcean_tripolar_360x180x50_F64_WENOVectorInvariantDefault_WENO7_CATKE_2tr/NVIDIA TITAN V/gpu_solve_batched_tridiagonal_system_kernel_",
            "value": 0.526301,
            "unit": "ms (median GPU time)"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/180x90x50",
            "value": 0.03060376036,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/720x360x50",
            "value": 0.32225215073,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F32",
            "value": 0.057521220690000006,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/nothing",
            "value": 0.049428380870000004,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+Biharmonic",
            "value": 0.11024485393000001,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE+GM+Biharmonic",
            "value": 0.291495226,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/nothing+nothing",
            "value": 0.040287531259999995,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant5+WENO5",
            "value": 0.06802381349,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariant9+WENO9",
            "value": 0.12073434169000001,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon_zstar",
            "value": 0.10070963950999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon_zstar",
            "value": 0.08927972977,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar_zstar",
            "value": 0.08724581456,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/lat_lon",
            "value": 0.08645884436,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/immersed_lat_lon",
            "value": 0.08132047559,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/3 tracers",
            "value": 0.09168029383000001,
            "unit": "s/timestep"
          },
          {
            "name": "Resolution Sweep/tripolar F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/360x180x50",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Float Type Sweep/tripolar 360x180x50 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/F64",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Closure Sweep/tripolar 360x180x50 F64 WENOVectorInvariantDefault+WENO7/NVIDIA TITAN V/CATKE",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Advection Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/WENOVectorInvariantDefault+WENO7",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Grid Type Sweep/360x180x50 F64 WENOVectorInvariantDefault+WENO7 CATKE/NVIDIA TITAN V/tripolar",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          },
          {
            "name": "Tracer Count Sweep/tripolar 360x180x50 F64 CATKE/NVIDIA TITAN V/2 tracers",
            "value": 0.08210426612999999,
            "unit": "s/timestep"
          }
        ]
      }
    ]
  }
}