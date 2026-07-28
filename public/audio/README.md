hall-of-fame-narration.mp3 exists and works — it's a functional placeholder,
not a final voice. It's generated with a local, offline speech synthesizer
(espeak-ng), pitched down slightly for gravitas. It's clear and correctly
wired end-to-end (loops, respects the mute toggle, plays on "Enter with
sound"), but it sounds synthetic/robotic — not "AI narrator" quality.

narration-script.txt has the exact words, timed for ~60–70s at a slow,
documentary pace, plus notes on tone and pacing.

To upgrade: generate the same script with a real AI voice (ElevenLabs,
PlayHT, Descript Overdub, etc.) or record a voice artist, then overwrite
this file with the same name. No code changes needed — the player just
picks up whatever's here.
