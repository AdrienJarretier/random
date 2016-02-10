TMP_DIR=$(mktemp -dp .)

UPDATE_COMMAND="sudo pacman -Syu"

BUFFER_FILE_UPDATES=$TMP_DIR/updates.txt
TMP_FILE=$TMP_DIR/tmp

echo "n" | $UPDATE_COMMAND > $TMP_FILE
cat $TMP_FILE | grep Packages | sed "s/Packages (.*) //" > $BUFFER_FILE_UPDATES

declare -a requiredByAnother
declare -a notInstalled

echo ""
echo "packages wich are not dependencies : "
for packageNewVersion in $(cat $BUFFER_FILE_UPDATES)
do
	word=$packageNewVersion
	pacman -Qi $word 2> /dev/null
	while [ $? -eq 1 ] && [ ${#word} -gt 1 ]
	do
		word=${word:0:-1}
		ouput=$(pacman -Qi $word 2> /dev/null)
	done

	if [ $(echo "$ouput" | grep -c "Required By  *:  *None") -eq 1  ]
		then
		echo "$ouput" | grep --color=always "Name\|Description\|Optional For\|Install Date\|Install Reason"
		echo "-------------------------------------------------------------------------------"
	elif [ ${#word} -gt 1 ]
		then
		requiredByAnother[${#requiredByAnother[*]}]=$word
	else
		notInstalled[${#notInstalled[*]}]=$packageNewVersion
	fi
done

# for required in ${name[@]}
# do
# 	echo $required
# done

echo ""
echo "package(s) required by other package(s) :"
for package in ${requiredByAnother[@]}
do
echo $package
done

echo ""
echo "new packages :"
for package in ${notInstalled[@]}
do
echo $package
done

echo ""


rm -r $TMP_DIR
