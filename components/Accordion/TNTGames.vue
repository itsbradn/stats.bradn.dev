<template>
                <AccordionItem itemId="tntgames">
                    <template v-slot:title>TNT Games</template>
                    <template v-slot:featured-stats>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">Wins</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M">{{ player.hypixel.stats.TNTGames.wins.value.toLocaleString("en-US") }}</div>
                        </div>
                        <div class="featured-stat">
                            <h4 class="text text-primary-500">Coins</h4>
                            <div class="text text-primary-400" data-weight="B" data-size="M">{{ player.hypixel.stats.TNTGames.coins.value.toLocaleString("en-US") }}</div>
                        </div>
                    </template>
                    <template v-slot:content>
                        <div class="flex-horizontal-c">
                            <div class="flex-column">
                                <div class="stat">Coins: <span>{{ player.hypixel.stats.TNTGames.coins.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Overall Wins: <span>{{ player.hypixel.stats.TNTGames.wins.value.toLocaleString("en-US") }}</span></div>
                                <p><br></p>
                                <h4 class="margin-bottom-8 text-primary-400">TNT Tag</h4>
                                <div class="stat">Wins: <span>{{ player.hypixel.stats.TNTGames.modes.tnt_tag.wins.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Kills: <span>{{ player.hypixel.stats.TNTGames.modes.tnt_tag.kills.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Deaths: <span>{{ player.hypixel.stats.TNTGames.modes.tnt_tag.deaths.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Kill/Death Ratio: <span>{{  handleRatio(player.hypixel.stats.TNTGames.modes.tnt_tag.kills.value, player.hypixel.stats.TNTGames.modes.tnt_tag.deaths.value) }}</span></div>
                                <p><br></p>
                                <h4 class="margin-bottom-8 text-primary-400">TNT Run</h4>
                                <div class="stat">Wins: <span>{{ player.hypixel.stats.TNTGames.modes.tnt_run.wins.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Deaths: <span>{{ player.hypixel.stats.TNTGames.modes.tnt_run.deaths.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Record: <span>{{ secToTime(player.hypixel.stats.TNTGames.modes.tnt_run.record.value) }}</span></div>
                            </div>
                            <div class="flex-column">
                                <h4 class="margin-bottom-8 text-primary-400">PVP Run</h4>
                                <div class="stat">Wins: <span>{{ player.hypixel.stats.TNTGames.modes.pvp_run.wins.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Kills: <span>{{ player.hypixel.stats.TNTGames.modes.pvp_run.kills.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Deaths: <span>{{ player.hypixel.stats.TNTGames.modes.pvp_run.deaths.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Kill/Death Ratio: <span>{{  handleRatio(player.hypixel.stats.TNTGames.modes.pvp_run.kills.value, player.hypixel.stats.TNTGames.modes.pvp_run.deaths.value) }}</span></div>
                                <div class="stat">Record: <span>{{ secToTime(player.hypixel.stats.TNTGames.modes.pvp_run.record.value) }}</span></div>
                                <p><br></p>
                                <p><br></p>
                                <h4 class="margin-bottom-8 text-primary-400">Bow Spleef</h4>
                                <div class="stat">Wins: <span>{{ player.hypixel.stats.TNTGames.modes.bow_spleef.wins.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Losses: <span>{{ player.hypixel.stats.TNTGames.modes.bow_spleef.deaths.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Win/Loss Ratio: <span>{{  handleRatio(player.hypixel.stats.TNTGames.modes.bow_spleef.wins.value, player.hypixel.stats.TNTGames.modes.bow_spleef.deaths.value) }}</span></div>
                                <div class="stat">Arrow Tags: <span>{{ player.hypixel.stats.TNTGames.modes.bow_spleef.tags.value?.toLocaleString("en-US") }}</span></div>
                            </div>
                        </div>
                        <div class="divider margin-top-8"></div>
                        <h4 class="text-align-center text-primary-400 margin-bottom-8">Wizards</h4>
                                <div class="stat">Wins: <span>{{ player.hypixel.stats.TNTGames.modes.wizards.wins.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Kills: <span>{{ player.hypixel.stats.TNTGames.modes.wizards.kills.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Deaths: <span>{{ player.hypixel.stats.TNTGames.modes.wizards.deaths.value?.toLocaleString("en-US") }}</span></div>
                                <div class="stat">Kill/Death Ratio: <span>{{  handleRatio(player.hypixel.stats.TNTGames.modes.wizards.kills.value, player.hypixel.stats.TNTGames.modes.wizards.deaths.value) }}</span></div>
                                <h5>Class statistics coming soon.</h5>
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
</script>