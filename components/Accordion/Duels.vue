<template>
                <AccordionItem itemId="duels">
                    <template v-slot:title>Duels</template>
                    <template v-slot:featured-stats>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">Division</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M" :class="player.hypixel.stats.Duels.division.color">{{ player.hypixel.stats.Duels.division.name }}</div>
                        </div>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">KD</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M">{{ handleRatio(player.hypixel.stats.Duels.kills.value, player.hypixel.stats.Duels.deaths.value) }}</div>
                        </div>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">WL</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M">{{ handleRatio(player.hypixel.stats.Duels.wins.value, player.hypixel.stats.Duels.losses.value) }}</div>
                        </div>
                    </template>
                    <template v-slot:content>
                        <div class="flex-horizontal-c">
                            <div class="flex-column">
                                <div class="stat">Coins: <span>{{ player.hypixel.stats.Duels.coins.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Loot Chests: <span>{{ player.hypixel.stats.Duels.lootChests.toLocaleString("en-US") }}</span></div>
                                <p><br></p>
                                <p><br></p>
                                <div class="stat">Kills: <span>{{ player.hypixel.stats.Duels.kills.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Deaths: <span>{{ player.hypixel.stats.Duels.deaths.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Kill/Death Ratio: <span>{{ handleRatio(player.hypixel.stats.Duels.kills.value, player.hypixel.stats.Duels.deaths.value) }}</span></div>
                                <p><br></p>
                                <div class="stat">Swings: <span>{{ player.hypixel.stats.Duels.swings.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Hits: <span>{{ player.hypixel.stats.Duels.hits.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Melee Hit Accuracy: <span>{{ handlePercent(player.hypixel.stats.Duels.hits.value, player.hypixel.stats.Duels.swings.value) }}%</span></div>
                            </div>
                            <div class="flex-column">
                                <div class="stat">Best Winstreak: <span>{{ player.hypixel.stats.Duels.winstreaks.best.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Current Winstreak: <span>{{ player.hypixel.stats.Duels.winstreaks.current.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Overall Division: <span :class="player.hypixel.stats.Duels.division.color">{{ player.hypixel.stats.Duels.division.name }}</span></div>
                                <p><br></p>
                                <div class="stat">Wins: <span>{{ player.hypixel.stats.Duels.wins.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Losses: <span>{{ player.hypixel.stats.Duels.losses.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Wins/Losses Ratio: <span>{{ handleRatio(player.hypixel.stats.Duels.wins.value, player.hypixel.stats.Duels.losses.value) }}</span></div>
                                <p><br></p>
                                <div class="stat">Arrows Shot: <span>{{ player.hypixel.stats.Duels.arrowsShot.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Arrows Hit: <span>{{ player.hypixel.stats.Duels.arrowsHit.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Arrow Hit Accuracy: <span>{{ handlePercent(player.hypixel.stats.Duels.arrowsHit.value, player.hypixel.stats.Duels.arrowsShot.value) }}%</span></div>
                            </div>
                        </div>
                        <div class="divider margin-top-8"></div>
                        <table class="stat-table">
                            <thead>
                                <th>Mode</th>
                                <th>Title</th>
                                <th>Kills</th>
                                <th>Deaths</th>
                                <th>KD</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>WL</th>
                                <th>WS</th>
                            </thead>
                            <tbody>
                                <tr v-for="mode in Object.keys(duelsModes)" :key="mode">
                                    <td>{{DuelModes.filter(v => v.id === mode)[0].name}}</td>
                                    <td :class="(duelsModes[mode].division ? duelsModes[mode].division.color : duelsModes[mode.split('_')[0] + '_duel'].division.color)">{{duelsModes[mode].division ? duelsModes[mode].division.name : duelsModes[mode.split("_")[0] + "_duel"].division.name }}</td> 
                                    <!-- ?.split(" ")[1] -->
                                    <td>{{ duelsModes[mode].kills.value.toLocaleString("en-US") }}</td>
                                    <td>{{ duelsModes[mode].deaths.value.toLocaleString("en-US") }}</td>
                                    <td>{{ handleRatio(duelsModes[mode].kills.value, duelsModes[mode].deaths.value).toLocaleString("en-US") }}</td>
                                    <td>{{ duelsModes[mode].wins.value.toLocaleString("en-US") }}</td>
                                    <td>{{ duelsModes[mode].losses.value.toLocaleString("en-US") }}</td>
                                    <td>{{ handleRatio(duelsModes[mode].wins.value, duelsModes[mode].losses.value).toLocaleString("en-US") }}</td>
                                    <td>{{ duelsModes[mode].winstreaks.current.value.toLocaleString("en-US") }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
                </AccordionItem>
</template>

<script setup>
    import { handlePercent, handleRatio, secToTime } from '~~/composables/number';
    const props = defineProps({
        player: {
            type: [Object],
        }
    });
    const player = props.player;

    // DUELS HANDLERS
    const duelsModes = Object.fromEntries(Object.entries(player.hypixel.stats.Duels.modes).filter(isDuelsValid));
    function isDuelsValid([key, value]) {
        if (!value) return false;
        return value?.wins?.value > 0 || value?.losses?.value > 0 || value?.kills?.value > 0 || value?.deaths?.value > 0
    }
    let DuelModes = [
    {id: 'uhc_duel', divisionId: 'uhc', name: 'UHC 1v1'},
    {id: 'uhc_doubles', divisionId: 'uhc', name: 'UHC 2v2'},
    {id: 'uhc_four', divisionId: 'uhc', name: 'UHC 4v4'},
    {id: 'uhc_meetup', divisionId: 'uhc', name: 'UHC Deathmatch'},
    {id: 'op_duel', divisionId: 'op',name: 'OP 1v1'},
    {id: 'op_doubles', divisionId: 'op', name: 'OP 2v2'},
    {id: 'sw_duel', divisionId: 'skywars', name: 'SkyWars 1v1'},
    {id: 'sw_doubles', divisionId: 'skywars', name: 'SkyWars 2v2'},
    {id: 'bow_duel', divisionId: 'bow', name: 'Bow 1v1'},
    {id: 'blitz_duel', divisionId: 'blitz', name: 'Blitz 1v1'},
    {id: 'mw_duel', divisionId: 'mega_walls', name: 'MegaWalls'},
    {id: 'sumo_duel', divisionId: 'sumo', name: 'Sumo 1v1'},
    {id: 'bowspleef_duel', divisionId: 'tnt_games', name: 'Bow Spleef 1v1'},
    {id: 'parkour_eight', divisionId: 'parkour', name: 'Parkour FFA'},
    {id: 'boxing_duel', divisionId: 'boxing', name: 'Boxing 1v1'},
    {id: 'classic_duel', divisionId: 'classic', name: 'Classic 1v1'},
    {id: 'potion_duel', divisionId: 'no_debuff', name: 'NoDebuff 1v1'},
    {id: 'combo_duel', divisionId: 'combo', name: 'Combo 1v1'},
    {id: 'bridge_duel', divisionId: 'bridge', name: 'Bridge 1v1'},
    {id: 'bridge_doubles', divisionId: 'bridge', name: 'Bridge 2v2'},
    {id: 'bridge_threes', divisionId: 'bridge', name: 'Bridge 3v3'},
    {id: 'bridge_four', divisionId: 'bridge', name: 'Bridge 4v4'},
    {id: 'bridge_2v2v2v2', divisionId: 'bridge', name: 'Bridge 2v2v2v2'},
    {id: 'bridge_3v3v3v3', divisionId: 'bridge', name: 'Bridge 3v3v3v3'},
    {id: 'capture_threes', divisionId: 'bridge', name: 'Bridge CTF 3v3'},
]
</script>