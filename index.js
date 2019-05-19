String.prototype.clr = function (hexColor) { return `<font color='#${hexColor}'>${this}</font>` };

module.exports = function TalentInspect(mod) {
    mod.hook('S_USER_PAPERDOLL_INFO', 8, (event) => {
        let message = ('[' + event.name + ']').toString().clr('FDD017');
        message += ' LVL: ' + event.talentLevel.toString().clr('00FFFF');
        message += ', EXP: ' + event.talentXp.toString().clr('00FFFF');
        message += ', DailyEXP: ' + event.talentDailyXp.toString().clr('00FFFF');
        mod.command.message(message);
    });
}
