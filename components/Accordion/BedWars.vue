<template>
                <AccordionItem itemId="bedwars">
                    <template v-slot:title>BedWars</template>
                    <template v-slot:featured-stats>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">Level</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M">{{ stats.level.value.toString().split('.')[0] }}</div>
                        </div>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">WL</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M">{{ handleRatio(stats.wins.value, stats.losses.value) }}</div>
                        </div>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">KD</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M">{{ handleRatio(stats.kills.value, stats.deaths.value) }}</div>
                        </div>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">FKD</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M">{{ handleRatio(stats.final_kills.value, stats.final_deaths.value) }}</div>
                        </div>
                    </template>
                    <template v-slot:content>
                        <div class="bar-wrapper margin-top-16 margin-bottom-16">
                            <div>{{ parseInt(stats.level.value.toString().split('.')[0]) }}</div>
                                                <div class="stat-bar">
                                                    <div class="stat-bar__text">{{ stats.level.value.toString().split('.')[1] }}%</div>
                                                    <div class="stat-bar__bar" :style="`width: ${stats.level.value.toString().split('.')[1] }%;`"></div>
                                                    <div class="stat-bar__base"></div>
                                                </div>
                            <div>{{ parseInt(stats.level.value.toString().split('.')[0]) + 1 }}</div>
                        </div>
                        <div class="flex-horizontal-c">
                            <div class="flex-column">
                                <div class="stat">Level: <span>{{ stats.level.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Coins: <span>{{ stats.coins.value.toLocaleString("en-US") }}</span></div>
                                <p><br></p>
                                <div class="stat">Kills: <span>{{ stats.kills.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Deaths: <span>{{ stats.deaths.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Kill/Death Ratio: <span>{{ handleRatio(stats.kills.value, stats.deaths.value) }}</span></div>
                                <div class="stat">Final Kills: <span>{{ stats.final_kills.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Final Deaths: <span>{{ stats.final_deaths.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Final Kill/Death Ratio: <span>{{ handleRatio(stats.final_kills.value, stats.final_deaths.value) }}</span></div>
                            </div>
                            <div class="flex-column">
                                <div class="stat">Winstreak: <span>{{ stats.winstreak.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Wins: <span>{{ stats.wins.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Losses: <span>{{ stats.losses.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Win/Loss Ratio: <span>{{ handleRatio(stats.wins.value, stats.losses.value) }}</span></div>
                                <p><br></p>
                                <div class="stat">Beds Broken: <span>{{ stats.beds_broken.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Beds Lost: <span>{{ stats.beds_lost.value.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Beds Broken/Lost Ratio: <span>{{ handleRatio(stats.beds_broken.value, stats.beds_lost.value) }}</span></div>
                            </div>
                            <div class="flex-column">
                                <div class="stat">Loot Chests: <span>{{ stats.boxes.current.toLocaleString("en-US") }}</span></div>
                                <p><br></p>
                                <div class="stat">Iron Collected: <span>{{ stats.resources_collected.iron.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Gold Collected: <span>{{ stats.resources_collected.gold.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Diamond Collected: <span>{{ stats.resources_collected.diamond.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Emerald Collected: <span>{{ stats.resources_collected.emerald.toLocaleString("en-US") }}</span></div>
                            </div>
                        </div>
                        <div class="divider margin-top-8"></div>
                        <table class="stat-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th colspan="3">Normal</th>
                                    <th colspan="3">Final</th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <th>Mode</th>
                                    <th>Kills</th>
                                    <th>Deaths</th>
                                    <th>KD</th>
                                    <th>Kills</th>
                                    <th>Deaths</th>
                                    <th>KD</th>
                                    <th>Wins</th>
                                    <th>Losses</th>
                                    <th>WL</th>
                                    <th>BB</th>
                                    <th>BL</th>
                                    <th>BBL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="mode in Object.keys(bwModes)" :key="mode">
                                    <td>{{BwModes.filter(v => v.id === mode)[0]?.name}}</td>
                                    <td>{{ bwModes[mode].kills.value.toLocaleString("en-US") }}</td>
                                    <td>{{ bwModes[mode].deaths.value.toLocaleString("en-US") }}</td>
                                    <td>{{ handleRatio(bwModes[mode].kills.value, bwModes[mode].deaths.value) }}</td>
                                    <td>{{ bwModes[mode].final_kills.value.toLocaleString("en-US") }}</td>
                                    <td>{{ bwModes[mode].final_deaths.value.toLocaleString("en-US") }}</td>
                                    <td>{{ handleRatio(bwModes[mode].final_kills.value, bwModes[mode].final_deaths.value) }}</td>
                                    <td>{{ bwModes[mode].wins.value.toLocaleString("en-US") }}</td>
                                    <td>{{ bwModes[mode].losses.value.toLocaleString("en-US") }}</td>
                                    <td>{{ handleRatio(bwModes[mode].wins.value, bwModes[mode].losses.value) }}</td>
                                    <td>{{ bwModes[mode].beds_broken.value.toLocaleString("en-US") }}</td>
                                    <td>{{ bwModes[mode].beds_lost.value.toLocaleString("en-US") }}</td>
                                    <td>{{ handleRatio(bwModes[mode].beds_broken.value, bwModes[mode].beds_lost.value) }}</td>
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
    const stats = player.hypixel.stats.BedWars;
    function showMode([key, value]) {
        if (!value) return false;
        return value?.wins?.value > 0 ||  value?.losses?.value > 0 || value?.kills?.value > 0 || value?.deaths?.value > 0
    }
    const bwModes = Object.fromEntries(Object.entries(stats.modes).filter(showMode));
    const BwModes = [
        {id: 'solo', name: 'Solos'},
        {id: 'doubles', name: 'Doubles'},
        {id: '3v3v3v3', name: '3v3v3v3'},
        {id: '4v4v4v4', name: '4v4v4v4'},
        {id: '4v4', name: '4v4'},
        {id: 'rush_solo', name: 'Rush Solos'},
        {id: 'rush_doubles', name: 'Rush Doubles'},
        {id: 'rush_4v4v4v4', name: 'Rush 4v4v4v4'},
        {id: 'ultimate_solo', name: 'Ultimate Solos'},
        {id: 'ultimate_doubles', name: 'Ultimate Doubles'},
        {id: 'ultimate_4v4v4v4', name: 'Ultimate 4v4v4v4'},
        {id: 'lucky_doubles', name: 'Lucky Doubles'},
        {id: 'lucky_4v4v4v4', name: 'Lucky 4v4v4v4'},
        {id: 'voidless_doubles', name: 'Voidless Doubles'},
        {id: 'voidless_4v4v4v4', name: 'Voidless 4v4v4v4'},
        {id: 'armed_doubles', name: 'Armed Doubles'},
        {id: 'armed_4v4v4v4', name: 'Armed 4v4v4v4'},
        {id: 'castle', name: 'Castle'},
    ]
</script>