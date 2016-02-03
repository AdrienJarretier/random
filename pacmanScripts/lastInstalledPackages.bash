TITLE="Most Recently installed Packages : "

LC_TIME="en_US.UTF-8" pacman -Qei | grep "Name\|Install Date" > tmp

old_IFS=$IFS
IFS=$'\n'

count=1

packageInfos=""
packageName=""
packageDateInstalled=""

for line in $(cat tmp)
do
	if [ $count -eq 1 ]
		then
		packageName=$(echo $line | sed "s/ *: */ : /")
	else
		dateInstalled=$(echo $line | sed "s/.*: //")
		forSortdateInstalled=$(date --date=$dateInstalled "+%F %T")

		packageDateInstalled=$(echo $line | sed "s/ *:.*/ :|/")
		packageDateInstalled=$packageDateInstalled$(date --date=$dateInstalled +%c)

		packageInfos=$packageName"|=> "$packageDateInstalled
		echo $forSortdateInstalled$packageInfos >> installedPackages.txt

		count=0
	fi
	((count++))
done
IFS=$old_IFS

COLUMNS=$(tput cols)
echo ""
printf "%*s\n" $(((${#TITLE}+$COLUMNS)/3)) "$TITLE"
echo ""
sort -r installedPackages.txt | sed "s/^....-..-.. ..:..:..//" |  column -t -s "|" | more -25

echo -n "" > installedPackages.txt
echo -n "" > tmp
