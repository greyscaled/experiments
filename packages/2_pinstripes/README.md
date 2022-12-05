# 2 Pinstripes

Conceived on: 2022-12-01

![demo](demo.gif)

## Description

I'm visualizing a canvas with vertical "pinstripes" that connect from `(x, 0)`
to (`x, y_max)`. The "pinstripes" waiver with ambience. A circular "orb" moves
around the canvas. The "orb" moves slowly and has two phases:

- opaque
- distortion

The `opaque` mode blocks pinstripes, which move around the orb (fan-in), then at
the end of the node (fan-out), they resume. The `distortion` mode is a
transparent overlay, but the signal of the "pinstripe" is alterred/distored.

### Specification Example

For the purposes of making this easy to protoype, imagine a 4x4 cellular grid.
At scale the grid will be much larger (the size of the canvas), but cells will
remain small.

```text
COL 0    Col 1   Col 2   Col 3
[(0, 0), (1, 0), (2, 0), (3, 0)] Row 0
[(0, 1), (1, 1), (2, 1), (3, 1)] Row 1
[(0, 2), (1, 2), (2, 2), (3, 2)] Row 2
[(0, 3), (1, 3), (2, 3), (3, 3)] Row 3
```

#### Model

There are two models:

1. The movement of the orb
2. The finite state machine representing the orb's modes. Presently there are
   only two modes, but theoretically other modes could be added to the machine

#### Orb Model

1. The orb can move from its current cell to an adjacent cell, or stay still
2. The orb has a velocity, and moves smoothly

#### Orb modes

The FSM is extremely simple:

- Alphabet:
  - `O`
  - `D`
- States:
  - `Opaque`
  - `Distortion`
- Initial State: `Opaque`
- State Transition Function:
  - (`Opaque`, `D`) -> `Distortion`
  - (`Distortion`, `O`) -> `Opaque`
- Terminal states:
  - (empty)

##### Opaque Mode

Assuming the orb is at position (1, 1):

```text
 0 1 2 3
[ \ / | ] 0
[     | ] 1
[ / \ | ] 2
[ | | | ] 3
```

##### Distortion Mode

Assuming the orb is at position (1, 1):

```text
 0 1 2 3
[ | | | ] 0
[ { } | ] 1
[ | | | ] 2
[ | | | ] 3
```

#### Look & Feel

The look feel should be black/white/greyscale and ideally ominous to some
degree.

##### Mode Transition: Smooth Dynamic Clock

In an ideal implementation, there is a clock that is consistent across grouped
ticks but may change speeds over time. To specify this further:

- start with an `interval`
- specifiy a `minimum_interval`
- specify a `maximum_interval`
- specify a `|max_delta_interval|`
- specify a `refactory_period`

such that:

1. The `interval` between ticks must be equal within the `refactory_period`
2. At the moment the `refactory_period` is satisfied, the `interval` between
   ticks may increase or decrease by a number in the range
   `|max_delta_interval|` so long as it is within the bounds of
   (`minimum_interval`,`maximum_interval`).
3. The change in `interval` may occur at the moment the `refactory_period` is
   satisfied, or any moment thereafter
4. Whenever the `interval` is changed, the `refactory_period` is reset and must
   be satisfied again before a change

##### Animations

In an ideal implementation, movements of the orb are smooth. It "glides" from
cell-to-cell, covering spaces between two cells across frames.

The pinstripes connecting along the vertical (y) axis should have slight
animations at rest, that are amplified when distorted by the orb. Rather than
perfect sinusoid, the ideal is a "noisy" waveform.

##### Ambience

In an ideal implementation, the "ambience" is captured by the pinstripes having
"noisy" waveforms. It would be a bonus if electricity/electrical sounds could be
incorporated.

## Alternatives

None known yet.
