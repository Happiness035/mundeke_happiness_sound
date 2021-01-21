while True:
    if input.light_level() > 8:
       if input.sound_level() <540:
        music.ba_ding.play_until_done()
        light.set_all(color.rgb(0,0,255))
    else:
        light.clear()
        music.stop_all_sounds()
       