while (true) {
    if (input.lightLevel() > 8) {
        if (input.soundLevel() < 540) {
            music.baDing.playUntilDone()
            light.setAll(color.rgb(0, 0, 255))
        }
        
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
