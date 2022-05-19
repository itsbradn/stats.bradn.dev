<template>
	<div class="panel">
		<h2 class="[ text-primary-500 ]">{{player.username}}</h2>
		<div class="panel__content">
			<div>
				<SkinCard :skinid="skinid" />
                <div class="card">
                    <div class="card__content" data-type="split">
                        <div class="text-align-center">
                            <h4 class="text-primary-400">Level</h4>
                            {{ Math.round(player.hypixel.networkLevel * 100) / 100 }}
                        </div>
                        <div class="text-align-center">
                            <h4 class="text-primary-400">Karma</h4>
                            {{ player.hypixel.karma.toLocaleString("en-US") }}
                        </div>
                    </div>
                    <div class="divider margin-top-8"></div>
                    <div class="card__content">
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">Achievement Points</div>
                            <div>{{ player.hypixel.achievements.points?.toLocaleString("en-US") }}</div>
                        </div>
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">Network Exp</div>
                            <div>{{ player.hypixel.networkExp.toLocaleString("en-US") }}</div>
                        </div>
                        <div class="divider"></div>
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">Last Login</div>
                            <div>{{ dateIntl.format(new Date(player.hypixel.connections.lastLogin)) }}</div>
                        </div>
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">Last Logout</div>
                            <div>{{ dateIntl.format(new Date(player.hypixel.connections.lastLogout)) }}</div>
                        </div>
                        <div class="row text" data-size="M">
                            <div class="text" data-size="M" data-weight="B">First Login</div>
                            <div>{{ dateIntl.format(new Date(player.hypixel.connections.firstLogin)) }}</div>
                        </div>
                    </div>
                </div>
			</div>
            <div>
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
            </div>
		</div>
	</div>
</template>

<script setup>
    const props = defineProps({
        player: {
            type: [Object],
        }
    });
    
definePageMeta({
  key: route => route.fullPath
})

function handleRatio(x, y) {
    return (x/y).toFixed(2);
}

function handlePercent(x, y) {
    return ((x * 100) / y).toFixed(1);
}

function secToTime(d) {
    // <3 25karma
	if (d === undefined) return "-";
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 3600 % 60);

	var hDisplay = h > 0 ? h + "h" : null;
	var mDisplay = m > 0 ? m + "m" : null;
	var sDisplay = s > 0 ? s + "s" : null;
	return [hDisplay, mDisplay, sDisplay].filter(n => n).join(', ');
}

let dateIntl = new Intl.DateTimeFormat("en-GB", {
												year: "numeric",
												month: "2-digit",
												day: "2-digit",
												hour: 'numeric',
												minute: 'numeric',
											});

    const player = props.player;
	const skinid = props.player.skinHistory[props.player.skinHistory.length - 1].textureId;




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