package Prova_2;

import com.intuit.karate.junit5.Karate;

class PokeRunner {

    @Karate.Test
    Karate testPokeKarate() {
        return Karate.run("poke").relativeTo(getClass());
    }

}
