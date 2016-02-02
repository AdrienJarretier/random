pacman -Qei | grep "Name\|Install Date" > tmp

old_IFS=$IFS
IFS=$'\n'

count=1

packageInfos=""

for line in $(cat tmp)
do
	if [ $count -eq 1 ]
		then
		packageInfos=$line
	else
		packageInfos=$packageInfos" | "$line
		echo $packageInfos
		count=0
	fi
	((count++))
done
IFS=$old_IFS

echo "" > tmp
